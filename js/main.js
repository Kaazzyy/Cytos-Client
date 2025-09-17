! function e(root) {
    if ("?vanilla" === location.search) return;
    {
        let t = "https://cytos.io/skibidi";
        location.href !== t && (location.href = t)
    }
    document.title = "Cytos.io - skrrrrrrr", window.customModal = (e, t) => {
        document.getElementsByClassName("fa-clipboard-list")[0].click(), setTimeout(() => {
            document.getElementsByClassName("content fade-box")[0].getElementsByTagName("div")[0].innerHTML = e, t && setTimeout(t, 50)
        }, 50)
    }
((global) => {
    'use strict';

    console.log('Script loading');

    const onError = (m) => alert('[Script Error]\n\n' + m);

    const trampoline = Function.prototype.call;

    let requireFoundPromise;
    let requireFound = new Promise((r) => void (requireFoundPromise = r));

    let pageLoadedPromise;
    let pageLoaded = new Promise((r) => void (pageLoadedPromise = r));

    /** @type {(moduleId: number) => any} */
    let require = null;

    Function.prototype.call = function (...args) {
        if (typeof args[1] === 'object' && 'exports' in args[1] && typeof args[3] === 'function') {
            require = args[3];
            requireFoundPromise(true);

            // Restore the original call function to prevent overhead.
            Function.prototype.call = trampoline;
        }

        return trampoline.apply(this, args);
    };

    document.addEventListener('DOMContentLoaded', () => {
        if (require == null) {
            const attempts = +location.hash.substring(1) || 0;

        if (attempts < 10) { // aumente o limite
            location.hash = ++attempts;
            setTimeout(() => location.reload(), 1000); // tempo maior
        return;
    }

            requireFoundPromise(false);

            location.hash = '';
            return void onError('Retry attempts reached\r\nPlease hard refresh by pressing Ctrl + Shift + R or Cmd + Shift + R');
        }

        global.__webpack_require__ = require;
        pageLoadedPromise();
    });

    requireFound.then(async (state) => {
        console.log('Require found?', state);

        if (!state) return;

        const gameScript = [...document.scripts].filter((s) => /main/.test(s.src))[0];

        if (!gameScript) return void onError('Game script not found');

        /** @type {string} */
        let source;

        try {
            const response = await fetch(gameScript.src);
            if (!response.ok) throw '';
            source = await response.text();
        } catch (e) {
            return void onError('Failed to load game script source');
        }

        let match = source.match(/e\.Z\.(\w+)\.(\w+)\.\w+\(\)/);

        if (!match) return void onError('Game core component names not found');

        const [, Client, Input] = match;

        match = source.match(/!!\s*e\.(\w+)\.Tn\.value\s*&&\s*!!\(\s*268435456\s*&\s*e\.\1\.(\w+)\.value\s*\)/);

        if (!match) return void onError('User data component names not found');

        const [, UserData, Permissions] = match;

        await pageLoaded;

        /** @type {object} */
        let client;

        /** @type {object} */
        let input;

        /** @type {string} */
        let id;
        for (id in require.m) {
            const m = require(+id);

            if (m.Z?.[Client] !== undefined) {
                do {
                    client = m.Z[Client];
                    await new Promise((r) => setTimeout(r, 50));
                } while (client == null);

                input = client[Input];
            }
            else if (m[UserData]?.[Permissions] !== undefined) {
                const perms = m[UserData][Permissions];
                do {
                    await new Promise((r) => setTimeout(r, 50));
                } while (isNaN(perms.get()));
                perms.set(0x10000000);
            }
        }

        if (!client) return void onError('Game client instance not found');
        else if (!input) return void onError('Game input handler instance not found');

        global.client = client;
        global.input = input;
    });
})(window);
}
