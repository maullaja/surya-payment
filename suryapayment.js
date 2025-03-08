<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PAYMENT EROZE STORE</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        /* Global Style */
        body {
            margin: 0;
            font-family: Arial, sans-serif;
            color: white;
            text-align: center;
            overflow-x: hidden;
            position: relative;
        }

        /* Background Video */
        .video-container {
            position: fixed;
            top: 0; left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            z-index: -1;
            transform: scale(1.1);
            transition: transform 0.5s ease;
        }

        .video-container:hover {
            transform: scale(1);
        }

        .video-container video {
            width: 100%;
            height: 100%;
            object-fit: cover;
            filter: blur(5px) brightness(0.7);
        }

        /* Overlay */
        .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.4);
        }

        /* Loading Screen */
        .preloader {
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            background: black;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            font-size: 24px;
            font-weight: bold;
            z-index: 9999;
            animation: fadeOut 3s forwards 3.5s;
        }

        .loading-text {
            font-size: 20px;
            font-weight: bold;
            margin-top: 10px;
            animation: pulse 1.5s infinite;
        }

        .loader {
            width: 50px;
            height: 50px;
            border: 5px solid #fff;
            border-top: 5px solid transparent;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }

        /* Animations */
        @keyframes fadeOut { to { opacity: 0; visibility: hidden; } }
        @keyframes pulse { 50% { opacity: 0.6; } }
        @keyframes spin { 100% { transform: rotate(360deg); } }
        @keyframes blink { 50% { opacity: 0; } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

        /* Header Animasi */
        .typing::after {
            content: '|';
            display: inline-block;
            animation: blink 0.7s infinite;
        }

        /* Container */
        .container {
            position: relative;
            z-index: 10;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }

        /* Glass Effect */
        .glass {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 10px;
            padding: 20px;
            width: 100%;
            max-width: 400px;
            text-align: center;
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
            animation: fadeInUp 1s ease-in-out;
        }

        /* Footer */
        footer {
            position: relative;
            margin-top: 20px;
            text-align: center;
            font-size: 14px;
        }

        /* Button Hover Effect */
        .button-hover {
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .button-hover:hover {
            transform: translateY(-3px);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        }

        /* Marquee Animation */
        .marquee {
            background: rgba(0, 0, 0, 0.5);
            padding: 10px 0;
            overflow: hidden;
        }

        .animate-marquee {
            display: inline-block;
            padding-left: 100%;
            animation: marquee 10s linear infinite;
        }

        @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
        }

        /* Glow Effect */
        .glow {
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.6);
            transition: box-shadow 0.3s ease;
        }

        .glow:hover {
            box-shadow: 0 0 25px rgba(255, 255, 255, 0.9);
        }

        /* Thumbnail Hover Effect */
        .thumbnail-hover {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .thumbnail-hover:hover {
            transform: scale(1.05);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        }

        /* Fade In Animation */
        .fade-in {
            opacity: 0;
            animation: fadeIn 1s ease-in forwards;
        }

        @keyframes fadeIn {
            to {
                opacity: 1;
            }
        }

        /* Snowfall Effect */
        #snowfall {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1000;
        }

        .snowflake {
            position: absolute;
            width: 10px;
            height: 10px;
            background: white;
            border-radius: 50%;
            filter: blur(2px);
            animation: fall linear infinite;
        }

        @keyframes fall {
            to {
                transform: translateY(100vh);
            }
        }

        /* Copy Confirmation */
        #copy-confirm {
            display: none;
            position: fixed;
            top: 20px;
            right: 20px;
            background: green;
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            z-index: 1000;
        }
    </style>
</head>
<body>

    <!-- Background Video -->
    <div class="video-container">
        <video autoplay loop muted>
            <source src="https://files.catbox.moe/z2ftsb.mp4" type="video/mp4">
        </video>
    </div>
    <div class="overlay"></div>

    <!-- Loading Screen -->
    <div class="preloader">
        <div class="loader"></div>
        <p class="loading-text">Memuat...</p>
    </div>

    <!-- Header -->
    <header class="text-2xl font-bold py-4">
        <span class="typing"></span>
    </header>

    <!-- Konten -->
    <div class="container">
        <div class="glass">
            <img src="https://i.supa.codes/7nBIU" class="w-full rounded-lg mb-4 thumbnail-hover" alt="Thumbnail">
            <h2 class="text-2xl font-bold text-blue-400 mb-2">Pembayaran</h2>
            <p class="text-sm text-gray-300 mb-4">Silakan transfer ke nomor Dana di bawah ini</p>

            <div class="bg-white bg-opacity-20 p-3 rounded-lg mb-4">
                <p class="text-lg font-semibold">Nomor Dana:</p>
                <input type="text" value="08985397156" id="dana-number" readonly 
                       class="w-full bg-transparent text-center text-white text-lg font-bold cursor-pointer focus:outline-none"
                       onclick="copyDana()">
            </div>

            <!-- Tambahkan QRIS di sini -->
            <div class="bg-white bg-opacity-20 p-3 rounded-lg mb-4">
                <p class="text-lg font-semibold">Pembayaran QRIS:</p>
                <img src="https://i.supa.codes/dCAIy" class="w-full rounded-lg mb-2 glow" alt="QRIS Code">
                <p class="text-sm text-gray-300">Scan QRIS di atas untuk melakukan pembayaran</p>
            </div>

            <div class="space-y-3">
                <a href="https://wa.me/6285194739970" target="_blank"
                   class="block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded transition duration-300 button-hover">
                   Chat Admin ⌬
                </a>
                <a href="https://whatsapp.com/channel/0029VaI5IB1IXnlwQTPv0b3h" target="_blank"
                   class="block bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 rounded transition duration-300 button-hover">
                   Join Channel ⌬
                </a>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer>© Eroze Store | Terimakasih sudah berbelanja di Eroze | Powered by Eroze UI</footer>

    <!-- Musik Otomatis -->
    <audio id="bg-music" loop autoplay>
        <source src="https://i.supa.codes/v2XyJ" type="audio/aac">
    </audio>

    <!-- Snowfall Effect -->
    <div id="snowfall"></div>

    <script>
        // Animasi Ketik & Hapus
        const text = "PAYMENT EROZE STORE";
        let index = 0;
        let isDeleting = false;
        let speed = 100;
        function typeEffect() {
            let typingElement = document.querySelector(".typing");
            if (isDeleting) {
                typingElement.textContent = text.substring(0, index--);
                speed = 50;
            } else {
                typingElement.textContent = text.substring(0, index++);
                speed = 100;
            }
            if (!isDeleting && index === text.length) {  
                speed = 1000;
                isDeleting = true;
            } else if (isDeleting && index === 0) {
                isDeleting = false;
            }
            setTimeout(typeEffect, speed);
        }
        typeEffect();

        // Copy Nomor Dana
        function copyDana() {
            let danaInput = document.getElementById("dana-number");
            danaInput.select();
            danaInput.setSelectionRange(0, 99999);
            document.execCommand("copy");

            // Tampilkan konfirmasi
            let confirmElement = document.getElementById("copy-confirm");
            confirmElement.style.display = "block";
            setTimeout(() => {
                confirmElement.style.display = "none";
            }, 2000);
        }

        // Auto Play Musik
        window.addEventListener("click", () => {
            document.getElementById("bg-music").play();
        }, { once: true });

        // Snowfall Effect
        function createSnowflake() {
            const snowflake = document.createElement('div');
            snowflake.classList.add('snowflake');
            snowflake.style.left = Math.random() * 100 + 'vw';
            snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
            snowflake.style.opacity = Math.random();
            snowflake.style.width = snowflake.style.height = Math.random() * 10 + 5 + 'px';
            document.getElementById('snowfall').appendChild(snowflake);
            setTimeout(() => {
                snowflake.remove();
            }, 5000);
        }

        setInterval(createSnowflake, 100);
    </script>
</body>
</html>
