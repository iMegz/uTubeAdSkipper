const observer = new MutationObserver((mutationsList, observer) => {
    for (const mutation of mutationsList) {
        if (mutation.target.classList.contains("ytp-ad-text")) {
            const video = document.querySelector("video");
            if(video) video.currentTime = video.duration;
            
            const skipBtn = document.querySelector(".ytp-ad-skip-button");
            const skipBtnModern = document.querySelector(".ytp-ad-skip-button-modern");
            if(skipBtn) skipBtn.click();
            if(skipBtnModern) skipBtnModern.click();
            
        }
    }
});

const observerOptions = { childList: true, subtree: true };
observer.observe(document.body, observerOptions);
