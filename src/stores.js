import { readable } from 'svelte/store';

export const candata =  readable('', function start(set) {
    const interval = setInterval(async () => {
        const response = await fetch('http://192.168.0.196:4000');
        console.log(response);
        // var data = await response.json();
        // console.log(data);
        set(response);
    }, 2000);

    return function stop() {
        clearInterval(interval);
    }
})