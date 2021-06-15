const paths = [];
function loadScript(src, callBack) {
    const script = document.createElement('script');
    if (typeof src === "string" || Array.isArray(src)) {
        if (callBack) {
            if (Array.isArray(src)) {
                for (let i = 0; i < src.length; i++) {
                    let scriptArr = document.createElement('script');
                    paths.push(src[i]);
                    scriptArr.src = src[i];
                    scriptArr.onload = callBack;
                    document.head.insertAdjacentElement('beforeend', scriptArr);
                }
                return;
            }
            script.src = src;
            script.onload = callBack;
        } else {
            console.log('error')
        }
    }

    if (typeof src ==='function') {
        src();
    }

    if (paths.length === 0) {

        document.head.insertAdjacentElement('beforeend', script);

    } else if (typeof src !== 'function') {
         for (let i = 0; i < paths.length; i++) {
             if (src.includes(paths[i])) {
                 document.head.insertAdjacentElement('beforeend', script);
             }
         }
    }
}

loadScript(['./common.js', './a.js'], ()=>{
    log();
    console.log('load index.js')
});

loadScript(()=> {
    console.log('load index.js')
});

loadScript('./common.js', ()=>{
    log();
    console.log('load index.js')
});
