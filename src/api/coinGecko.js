import { useDebugValue } from "react";

export const fetchEthPrice = async () => {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    const url = 'https://api.coingecko.com/api/v3/coins/ethereum';
    const paramaters = {
        localization: false,
        tickers: false,
        market_data: true,
        community_data: false,
        developer_data: false,
        sparkline: false,
    };

    const response = await fetch(`${url}?` + new URLSearchParams(paramaters), requestOptions);

    const toTwelveHour = h => (h + 11) % 12 + 1;

    const formatTime = n => {
        const num = n.toString();
        return num.length === 1 ? `0${num}` : num;
    }

    if (response.ok) {
        const response_json = await response.json();
        const timestamp = new Date(response_json?.last_updated);
        const hours = timestamp.getHours();
        const hoursTwelve = toTwelveHour(hours);
        const minutes = timestamp.getMinutes();
        const isPM = hours - (hoursTwelve) !== 0;
        const time = `${formatTime(hoursTwelve)}:${formatTime(minutes)} ${isPM ? 'PM' : 'AM'}`;
        const price = response_json?.market_data?.current_price?.usd;  // TODO : make other currencies available
        return { time, price };
    }

    return 'error';
}
