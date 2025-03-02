Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 0.7,
});

Shery.makeMagnet(".magnet-target", {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});

Shery.textAnimate(".text-target", {
    style: 1,
    y: 100,
    delay: 0.1,
    duration: 1,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
});

Shery.hoverWithMediaCircle(".hover-target" /* Element to target.*/, {
    images: ["img1.jpg", "img2.png"] /*OR*/,
    //videos: ["video1.mp4", "video2.mp4"],
  });