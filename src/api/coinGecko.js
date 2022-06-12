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

    if (response.ok) {
        const response_json = await response.json();
        console.log(response_json);
        const timestamp = new Date(response_json?.last_updated);
        const hours = timestamp.getHours();
        const minutes = timestamp.getMinutes();
        const isPM = hours - (hours % 12) !== 0;
        const time = `${hours % 12}:${minutes} ${isPM ? 'PM' : 'AM'}`;
        const price = response_json?.market_data?.current_price?.usd;  // TODO : make other currencies available
        console.log({ time, price})
        return { time, price };
    }

    return 'error';
}
