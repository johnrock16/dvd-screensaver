import logoDVD from "./logoDVD";

document.addEventListener("DOMContentLoaded", function () {
    const canvas = <HTMLCanvasElement> document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");
    let logo = logoDVD();

    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;

    setInterval(() => {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        logo.update(ctx);
    }, 1000 / 120);

    window.addEventListener("resize", function () {
        logo = logoDVD();
        ctx.canvas.width = window.innerWidth;
        ctx.canvas.height = window.innerHeight;
    });
});
