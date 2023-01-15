import { useEffect, useRef, useState } from "react";

export function ImageEffectCanvas50() {
  const style = {
    canvas: {
      width: "100%",
      maxWidth: "400px",
      borderRadius: "50%",
      boxShadow: "2px 7px 10px 2px rgba(0,0,0,0.5)",
    },
  };

  // const base64 = convertBase64(image);

  // const convertBase64 = (image) => {
  //   return new Promise((resolve, reject) => {
  //     const fileReader = new FileReader();
  //     fileReader.readAsDataURL(image);
  //     fileReader.onload = () => {
  //       resolve(fileReader.result);
  //     };

  //     fileReader.onerror = (error) => {
  //       reject(error);
  //     };
  //   });
  // };

  const canvasRef = useRef(null);
  const myImage = new Image();
  const [myImageSrc, setMyImageSrc] = useState(
    "data:image/png;base64,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"
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = 400;
    canvas.height = 400;

    myImage.src = myImageSrc;

    ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);
    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let particlesArray = [];
    const numberOfParticles = 500;

    let mappedImage = [];
    for (let y = 0; y < canvas.height; y++) {
      let row = [];
      for (let x = 0; x < canvas.width; x++) {
        const red = pixels.data[y * 4 * pixels.width + x * 4];
        const green = pixels.data[y * 4 * pixels.width + (x * 4 + 1)];
        const blue = pixels.data[y * 4 * pixels.width + (x * 4 + 2)];
        const brightness = calculateRelativeBrightness(red, green, blue);
        const cell = [brightness];
        row.push(cell);
      }
      mappedImage.push(row);
    }

    function calculateRelativeBrightness(red, green, blue) {
      return Math.sqrt(red * red * 0.299 + green * green * 0.587 + blue * blue * 0.114) / 100;
    }

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = 0;
        this.speed = 0;
        this.velocity = Math.random() * 0.5;
        this.size = Math.random() * 1.5 + 1;
        this.position1 = Math.floor(this.y);
        this.position2 = Math.floor(this.x);
      }

      update() {
        this.position1 = Math.floor(this.y);
        this.position2 = Math.floor(this.x);
        this.speed = mappedImage[this.position1][this.position2][0];
        let movement = 2.5 - this.speed + this.velocity;

        this.y += movement;
        if (this.y >= canvas.height) {
          this.y = 0;
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function init() {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    }

    init();
    function animate() {
      ctx.globalAlpha = 0.02;
      ctx.fillStyle = "rgb(0,0,0)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = 0.5;

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        ctx.globalAlpha = particlesArray[i].speed * 0.8;
        particlesArray[i].draw();
      }
      requestAnimationFrame(animate);
    }
    animate();
  }, []);

  return <canvas ref={canvasRef} style={style.canvas}></canvas>;
}
