const observer = new MutationObserver((mutationsList, observer) => {
    for (const mutation of mutationsList) {
        if (mutation.target.classList.contains("ytp-ad-text")) {
            const video = document.querySelector("video");
            video.currentTime = video.duration;
            const skipBtn = document.querySelector(".ytp-ad-skip-button");
            if(skipBtn) skipBtn.click();
        }
    }
});

const observerOptions = { childList: true, subtree: true };
observer.observe(document.body, observerOptions);
