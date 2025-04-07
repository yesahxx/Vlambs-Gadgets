function getProductImage(id, category) {
    const productImagePath = `images/products/product_${id}.jpg`;
    const categoryImagePath = `images/products/category_${category.toLowerCase()}.jpg`;
    return productImagePath;
}

const products = [
    {
        id: 1,
        name: "Ultra Slim Laptop Pro",
        category: "Laptop",
        price: 1299.99,
        get image() { return getProductImage(this.id, this.category); },
        description: "Experience unparalleled performance with our Ultra Slim Laptop Pro. Featuring a stunning 15.6-inch 4K display, powerful 11th Gen Intel i7 processor, 16GB RAM, and 1TB SSD storage. Perfect for professionals who demand the best in portability and power.",
        specs: {
            processor: "Intel Core i7-1165G7",
            ram: "16GB DDR4",
            storage: "1TB NVMe SSD",
            display: "15.6-inch 4K Ultra HD (3840 x 2160)",
            graphics: "Intel Iris Xe Graphics",
            battery: "Up to 12 hours",
            weight: "1.3 kg"
        },
        features: [
            "Backlit keyboard with precision touchpad",
            "Thunderbolt 4 ports for ultra-fast data transfer",
            "Fingerprint reader for enhanced security",
            "Military-grade durability certification",
            "AI-enhanced noise cancellation for crystal-clear video calls"
        ]
    },
    {
        id: 2,
        name: "Pro Camera X2000",
        category: "Camera",
        price: 899.99,
        get image() { return getProductImage(this.id, this.category); },
        description: "Capture every moment in stunning detail with the Pro Camera X2000. This professional-grade camera features a 24.2MP full-frame sensor, 4K video recording at 60fps, and advanced autofocus system with eye tracking. Perfect for professional photographers and enthusiasts alike.",
        specs: {
            sensor: "24.2MP Full-Frame CMOS",
            processor: "DIGIC X Image Processor",
            iso: "100-51,200 (expandable to 204,800)",
            autofocus: "Dual Pixel CMOS AF with 1,053 AF points",
            video: "4K 60fps, 1080p 120fps",
            stabilization: "5-axis in-body image stabilization",
            connectivity: "Wi-Fi 6, Bluetooth 5.0, USB-C"
        },
        features: [
            "Weather-sealed magnesium alloy body",
            "Vari-angle touchscreen LCD",
            "Dual memory card slots (CFexpress & SD UHS-II)",
            "15+ stops of dynamic range",
            "AI-powered subject recognition"
        ]
    },
    {
        id: 3,
        name: "SmartPhone Infinity",
        category: "Phone",
        price: 999.99,
        get image() { return getProductImage(this.id, this.category); },
        description: "Redefine your mobile experience with the SmartPhone Infinity. Featuring a breathtaking 6.7-inch AMOLED display with 120Hz refresh rate, revolutionary camera system, and the latest 5G technology. Powered by our most advanced chipset ever for incredible performance and all-day battery life.",
        specs: {
            display: "6.7-inch AMOLED (3200 x 1440) with 120Hz refresh rate",
            processor: "Snapdragon 8 Gen 2",
            ram: "12GB LPDDR5",
            storage: "256GB/512GB UFS 4.0",
            camera: "Triple camera: 50MP main, 12MP ultrawide, 10MP telephoto",
            battery: "5000mAh with 45W fast charging",
            os: "Android 13"
        },
        features: [
            "Under-display fingerprint sensor",
            "IP68 water and dust resistance",
            "Gorilla Glass Victus protection",
            "Stereo speakers tuned by Dolby Atmos",
            "Wireless charging and reverse wireless charging"
        ]
    },
    {
        id: 4,
        name: "Premium Sound Speaker",
        category: "Speaker",
        price: 299.99,
        get image() { return getProductImage(this.id, this.category); },
        description: "Immerse yourself in rich, room-filling sound with the Premium Sound Speaker. Engineered with advanced acoustic technologies, this speaker delivers deep bass, crystal-clear highs, and perfect midrange tones. With smart home integration and elegant design, it's the perfect addition to any space.",
        specs: {
            drivers: "1-inch tweeter, 4.5-inch woofer, dual passive radiators",
            power: "100W total output",
            frequency: "35Hz - 20kHz",
            connectivity: "Wi-Fi, Bluetooth 5.2, AirPlay 2, Chromecast",
            multiroom: "Supports multi-room audio synchronization",
            assistant: "Works with Google Assistant, Alexa, and Siri",
            battery: "Up to 15 hours playtime"
        },
        features: [
            "Adaptive sound technology that adjusts to your room",
            "360° omnidirectional sound projection",
            "Customizable EQ via companion app",
            "Voice control capabilities",
            "IPX4 water resistance for outdoor use"
        ]
    },
    {
        id: 5,
        name: "Gaming Laptop Extreme",
        category: "Laptop",
        price: 1799.99,
        get image() { return getProductImage(this.id, this.category); },
        description: "Dominate the competition with the Gaming Laptop Extreme. Featuring a blazing-fast 165Hz display, RTX 3080 graphics, and liquid metal cooling system. This powerhouse is designed for serious gamers who demand the ultimate performance for AAA titles and competitive esports.",
        specs: {
            processor: "AMD Ryzen 9 5900HX",
            graphics: "NVIDIA GeForce RTX 3080 16GB",
            ram: "32GB DDR4-3200",
            storage: "2TB NVMe SSD (RAID 0)",
            display: "17.3-inch Full HD 165Hz with G-SYNC",
            cooling: "Advanced liquid metal thermal system",
            keyboard: "Per-key RGB mechanical keyboard"
        },
        features: [
            "AI-powered noise cancellation for clear in-game communication",
            "Customizable RGB lighting across chassis",
            "Thunderbolt 4 and HDMI 2.1 for multi-display setups",
            "Advanced fan control with performance profiles",
            "Virtual 7.1 surround sound"
        ]
    },
    {
        id: 6,
        name: "Ultra Compact Camera",
        category: "Camera",
        price: 599.99,
        get image() { return getProductImage(this.id, this.category); },
        description: "Don't let the size fool you. The Ultra Compact Camera packs professional features into a pocket-sized body. With a large 1-inch sensor, 4K video capabilities, and advanced shooting modes, this camera is perfect for travel photography and everyday creative shooting.",
        specs: {
            sensor: "1-inch 20.1MP Exmor RS CMOS",
            lens: "24-70mm equivalent f/1.8-2.8 ZEISS Vario-Sonnar T*",
            iso: "125-12,800 (expandable to 80-25,600)",
            stabilization: "Optical SteadyShot image stabilization",
            video: "4K 30fps, High-speed 1080p at 120fps",
            viewfinder: "2.36M-dot OLED electronic viewfinder",
            screen: "3-inch 180° tilting touchscreen LCD"
        },
        features: [
            "Fast Hybrid AF with 357 phase-detection points",
            "Eye AF for humans and animals",
            "24fps continuous shooting with AF/AE tracking",
            "S-Log2, S-Log3, and HLG for professional video workflows",
            "Bluetooth and Wi-Fi for seamless sharing"
        ]
    },
    {
        id: 7,
        name: "Foldable Smartphone Z",
        category: "Phone",
        price: 1499.99,
        get image() { return getProductImage(this.id, this.category); },
        description: "Experience the future of smartphones with the revolutionary Foldable Smartphone Z. Featuring a flexible 7.6-inch main display that folds to a compact size, cutting-edge multitasking capabilities, and exceptional camera system. Redefine what's possible with a smartphone.",
        specs: {
            mainDisplay: "7.6-inch foldable AMOLED (2208 x 1768) 120Hz",
            coverDisplay: "6.2-inch AMOLED (2268 x 832) 120Hz",
            processor: "Latest flagship processor",
            ram: "12GB LPDDR5",
            storage: "512GB UFS 4.0",
            camera: "Triple rear camera: 50MP main, 12MP ultrawide, 10MP telephoto with 3x optical zoom",
            battery: "4400mAh dual battery system"
        },
        features: [
            "Advanced hinge mechanism with water resistance",
            "S Pen support on main display",
            "Flex mode for hands-free video calls and photography",
            "Enhanced multitasking with multi-window support",
            "Under-display camera on main screen for immersive viewing"
        ]
    },
    {
        id: 8,
        name: "Smart Home Speaker Hub",
        category: "Speaker",
        price: 199.99,
        get image() { return getProductImage(this.id, this.category); },
        description: "Transform your home with the Smart Home Speaker Hub. Beyond delivering room-filling premium audio, this intelligent speaker serves as a complete smart home control center. Manage lights, thermostats, security systems, and more with simple voice commands or the intuitive touch display.",
        specs: {
            sound: "360° sound with dedicated woofer and dual tweeters",
            display: "7-inch HD touchscreen",
            farField: "6-microphone array for voice detection across the room",
            connectivity: "Wi-Fi 6, Bluetooth 5.1, Zigbee, Thread, Matter protocol support",
            processor: "Quad-core processor for responsive controls",
            camera: "5MP camera with physical privacy shutter"
        },
        features: [
            "Built-in smart home hub compatible with 10,000+ devices",
            "Adaptive audio that adjusts to room acoustics",
            "Video calling and intercom functionality between rooms",
            "Custom routines and automation capabilities",
            "Privacy-focused design with microphone/camera disable options"
        ]
    },
    {
        id: 9,
        name: "Business Ultrabook Pro",
        category: "Laptop",
        price: 1199.99,
        get image() { return getProductImage(this.id, this.category); },
        description: "The Business Ultrabook Pro is designed for professionals on the go. With its all-day battery life, robust security features, and lightweight design, it's the perfect companion for business travel and demanding work environments.",
        specs: {
            processor: "Intel Core i5-1135G7",
            ram: "16GB LPDDR4X",
            storage: "512GB PCIe SSD",
            display: "14-inch Full HD IPS Anti-Glare (1920 x 1080)",
            graphics: "Intel Iris Xe Graphics",
            battery: "Up to 15 hours",
            weight: "1.2 kg"
        },
        features: [
            "Windows Hello facial recognition and fingerprint reader",
            "Spill-resistant keyboard with privacy screen",
            "Rapid charge technology (80% in 1 hour)",
            "TPM 2.0 chip for enhanced security",
            "Noise-cancelling microphones for clear conference calls"
        ]
    },
    {
        id: 10,
        name: "Student Laptop Essentials",
        category: "Laptop",
        price: 649.99,
        get image() { return getProductImage(this.id, this.category); },
        description: "The perfect laptop for students offering the right balance of performance, portability, and price. With enough power for research, assignments, and light entertainment, this laptop will get you through the semester without breaking the bank.",
        specs: {
            processor: "AMD Ryzen 5 5500U",
            ram: "8GB DDR4",
            storage: "256GB SSD",
            display: "15.6-inch Full HD (1920 x 1080)",
            graphics: "AMD Radeon Graphics",
            battery: "Up to 10 hours",
            weight: "1.6 kg"
        },
        features: [
            "Ergonomic keyboard with numeric keypad",
            "Fast charging support",
            "Dual-band Wi-Fi 6",
            "Tuned stereo speakers",
            "HD webcam with privacy shutter"
        ]
    },
    {
        id: 11,
        name: "Creator Laptop Studio",
        category: "Laptop",
        price: 1999.99,
        get image() { return getProductImage(this.id, this.category); },
        description: "Unleash your creativity with the Creator Laptop Studio. Built for designers, video editors, and content creators, this powerhouse features a color-accurate display, professional graphics, and performance that can handle the most demanding creative applications.",
        specs: {
            processor: "Intel Core i7-11800H",
            ram: "32GB DDR4",
            storage: "1TB NVMe SSD",
            display: "16-inch 4K OLED Touch (3840 x 2400), 100% DCI-P3",
            graphics: "NVIDIA RTX 3060 6GB",
            battery: "Up to 8 hours",
            weight: "2.0 kg"
        },
        features: [
            "Precision touchpad with stylus support",
            "SD card reader for direct imports",
            "Calibrated display with hardware color calibrator",
            "Thunderbolt 4 ports with full DisplayPort support",
            "Enhanced cooling system for sustained performance"
        ]
    },
    {
        id: 12,
        name: "Convertible 2-in-1 Laptop",
        category: "Laptop",
        price: 999.99,
        get image() { return getProductImage(this.id, this.category); },
        description: "Experience the versatility of the Convertible 2-in-1 Laptop. Seamlessly switch between laptop and tablet modes for maximum flexibility in how you work, learn, and play. The responsive touchscreen and included stylus make note-taking and creative tasks intuitive and natural.",
        specs: {
            processor: "Intel Core i5-1135G7",
            ram: "16GB LPDDR4X",
            storage: "512GB PCIe SSD",
            display: "13.3-inch Full HD Touch (1920 x 1080)",
            graphics: "Intel Iris Xe Graphics",
            battery: "Up to 12 hours",
            weight: "1.4 kg"
        },
        features: [
            "360° hinge for flexible usage modes",
            "Included active stylus with 4,096 pressure levels",
            "Backlit keyboard and precision touchpad",
            "Windows Hello facial recognition",
            "Adaptive color temperature based on ambient light"
        ]
    },
    {
        id: 13,
        name: "Budget Laptop Essential",
        category: "Laptop",
        price: 449.99,
        get image() { return getProductImage(this.id, this.category); },
        description: "The Budget Laptop Essential offers reliable performance for everyday computing tasks at an affordable price. Perfect for web browsing, email, document editing, and streaming entertainment. Get all the essentials without unnecessary extras.",
        specs: {
            processor: "Intel Core i3-1115G4",
            ram: "8GB DDR4",
            storage: "256GB SSD",
            display: "15.6-inch HD (1366 x 768)",
            graphics: "Intel UHD Graphics",
            battery: "Up to 8 hours",
            weight: "1.8 kg"
        },
        features: [
            "Full-size keyboard with numeric keypad",
            "Multiple USB ports and HDMI output",
            "Dual-band Wi-Fi 5",
            "720p webcam for video calls",
            "Fast startup with SSD storage"
        ]
    },
    {
        id: 14,
        name: "Rugged Outdoor Laptop",
        category: "Laptop",
        price: 1699.99,
        get image() { return getProductImage(this.id, this.category); },
        description: "Built to withstand the elements, the Rugged Outdoor Laptop is perfect for fieldwork, construction sites, and extreme environments. With military-grade durability, excellent battery life, and reliable performance, it's the tool you need when conditions get tough.",
        specs: {
            processor: "Intel Core i5-1135G7",
            ram: "16GB DDR4",
            storage: "512GB SSD",
            display: "14-inch Full HD Anti-Glare (1920 x 1080)",
            graphics: "Intel Iris Xe Graphics",
            battery: "Up to 20 hours with extended battery",
            weight: "2.2 kg"
        },
        features: [
            "MIL-STD-810H certified for drops, shocks, vibration",
            "IP65 rated for dust and water resistance",
            "Sunlight-readable display with glove-compatible touchscreen",
            "Optional 4G LTE connectivity",
            "Reinforced ports and connector covers"
        ]
    },
    {
        id: 15,
        name: "Compact Travel Laptop",
        category: "Laptop",
        price: 899.99,
        get image() { return getProductImage(this.id, this.category); },
        description: "The Compact Travel Laptop is designed for life on the move. Weighing just under a kilogram with a thin profile, it fits easily in any bag without sacrificing performance. Ideal for frequent travelers, commuters, and digital nomads.",
        specs: {
            processor: "Intel Core i5-1130G7",
            ram: "8GB LPDDR4X",
            storage: "256GB PCIe SSD",
            display: "13-inch Full HD IPS (1920 x 1080)",
            graphics: "Intel Iris Xe Graphics",
            battery: "Up to 14 hours",
            weight: "0.98 kg"
        },
        features: [
            "Magnesium alloy chassis for lightweight durability",
            "Adaptive keyboard backlight with ambient light sensor",
            "Quick charge support (50% in 30 minutes)",
            "Full-size USB and USB-C ports despite thin design",
            "International power adapter included"
        ]
    },
    {
        id: 16,
        name: "DSLR Pro Camera Kit",
        category: "Camera",
        price: 1299.99,
        get image() { return getProductImage(this.id, this.category); },
        description: "The DSLR Pro Camera Kit offers everything the serious photographer needs to capture stunning images. With a high-resolution full-frame sensor, weather-sealed body, and versatile kit lens, this camera delivers professional-grade results in any shooting situation.",
        specs: {
            sensor: "24.5MP Full-Frame CMOS",
            processor: "EXPEED 6 Image Processor",
            iso: "100-51,200 (expandable to 204,800)",
            autofocus: "153-point AF system with 99 cross-type sensors",
            video: "4K UHD at 30p, Full HD at 120p",
            storage: "Dual UHS-II SD card slots",
            batteryLife: "Up to 1,840 shots per charge"
        },
        features: [
            "Weather-sealed magnesium alloy construction",
            "3.2-inch tilting touchscreen LCD",
            "Built-in Wi-Fi and Bluetooth for wireless connectivity",
            "Includes versatile 24-70mm f/4 kit lens",
            "In-camera focus stacking and multiple exposure features"
        ]
    },
    {
        id: 17,
        name: "Mirrorless Camera Elite",
        category: "Camera",
        price: 1799.99,
        get image() { return getProductImage(this.id, this.category); },
        description: "The Mirrorless Camera Elite combines compact size with professional capabilities. Featuring a high-resolution sensor, in-body stabilization, and advanced video features, this camera is perfect for hybrid creators who demand the best in both still photography and filmmaking.",
        specs: {
            sensor: "45MP Full-Frame BSI CMOS",
            processor: "Latest generation imaging engine",
            iso: "100-32,000 (expandable to 102,400)",
            stabilization: "5-axis in-body image stabilization (up to 8 stops)",
            video: "8K 30p, 4K 120p, 10-bit internal recording",
            evf: "5.76M-dot OLED electronic viewfinder",
            storage: "Dual card slots (CFexpress Type B and UHS-II SD)"
        },
        features: [
            "AI-based subject recognition and tracking",
            "15+ stops of dynamic range for stills",
            "ProRes RAW video recording capability",
            "USB-C PD support for charging and tethered shooting",
            "Weather-sealed construction for professional reliability"
        ]
    },
    {
        id: 18,
        name: "Vlogging Camera Plus",
        category: "Camera",
        price: 749.99,
        get image() { return getProductImage(this.id, this.category); },
        description: "Designed specifically for content creators, the Vlogging Camera Plus features a flip-out screen, excellent autofocus for self-recording, and high-quality 4K video. Compact enough to take anywhere but powerful enough for professional-looking content.",
        specs: {
            sensor: "20.1MP 1-inch Exmor RS CMOS",
            lens: "24-70mm equivalent f/1.8-2.8 ZEISS lens",
            video: "4K 30p with no crop, Full HD 120p",
            screen: "3-inch fully articulating touchscreen LCD",
            stabilization: "Optical SteadyShot and Active electronic stabilization",
            audio: "Directional 3-capsule microphone with wind screen",
            connectivity: "Wi-Fi, Bluetooth, USB-C, Micro HDMI"
        },
        features: [
            "Real-time Eye AF for humans and animals",
            "S-Log profiles for advanced color grading",
            "Product showcase focus mode for object demonstrations",
            "Time-lapse and slow-motion capabilities built-in",
            "Livestreaming capability via USB connection"
        ]
    },
    {
        id: 19,
        name: "Action Camera Extreme",
        category: "Camera",
        price: 349.99,
        get image() { return getProductImage(this.id, this.category); },
        description: "Capture your adventures with the Action Camera Extreme. This rugged, waterproof camera records stunning 5K video with incredible stabilization, making even the most action-packed activities look smooth and professional. Small enough to mount anywhere but powerful enough for pro-quality results.",
        specs: {
            video: "5K30, 4K60, 2.7K120, 1080p240",
            photo: "23MP with SuperPhoto HDR",
            stabilization: "HyperSmooth 4.0 stabilization with horizon leveling",
            waterproof: "Waterproof to 33ft (10m) without case",
            batteryLife: "Up to 2 hours of 4K recording",
            connectivity: "Wi-Fi, Bluetooth, USB-C, GPS",
            display: "2.27-inch touch display with front LCD"
        },
        features: [
            "TimeWarp 3.0 for stabilized time-lapse",
            "Hindsight feature to capture action before recording starts",
            "Live streaming at 1080p with stabilization",
            "Voice control with 13 commands in multiple languages",
            "Webcam mode for high-quality video conferencing"
        ]
    },
    {
        id: 20,
        name: "Smartphone Camera Kit",
        category: "Camera",
        price: 129.99,
        get image() { return getProductImage(this.id, this.category); },
        description: "Elevate your smartphone photography with the Smartphone Camera Kit. This comprehensive package includes premium lenses, stabilizers, and accessories that transform your phone into a professional-grade camera system. Perfect for mobile photographers and content creators.",
        specs: {
            lenses: "Wide angle, macro, and 2x telephoto lenses included",
            stabilizer: "Bluetooth gimbal stabilizer with 3-axis stabilization",
            lighting: "Rechargeable LED light panel with adjustable brightness",
            microphone: "Directional microphone with wind screen",
            tripod: "Extendable tripod with Bluetooth remote",
            compatibility: "Works with most smartphones (2.5-3.5 inch width)"
        },
        features: [
            "Premium glass lenses with multi-coating for reduced flare",
            "Quick-release mounting system for fast lens swapping",
            "Companion app with advanced manual controls",
            "Carrying case with custom foam inserts",
            "Tutorial videos and photography guide included"
        ]
    },
    {
        id: 21,
        name: "360° Panoramic Camera",
        category: "Camera",
        price: 299.99,
        get image() { return getProductImage(this.id, this.category); },
        description: "Capture everything around you with the 360° Panoramic Camera. This innovative device records immersive spherical video and photos that can be explored in virtual reality or shared on social media with interactive viewing. Perfect for real estate, tourism, and creating immersive memories.",
        specs: {
            resolution: "5.7K 30fps video, 18MP photos",
            lenses: "Dual 210° fisheye lenses for complete 360° coverage",
            stabilization: "6-axis stabilization with horizon leveling",
            waterproof: "IPX4 splash resistant",
            batteryLife: "Up to 80 minutes of continuous recording",
            storage: "microSD card up to 1TB",
            connectivity: "Wi-Fi, Bluetooth, USB-C"
        },
        features: [
            "Invisible selfie stick effect in captures",
            "Live preview and remote control via smartphone app",
            "In-camera stitching for immediate sharing",
            "HDR photo and video modes",
            "One-click sharing to VR platforms and social media"
        ]
    },
    {
        id: 22,
        name: "Retro Instant Camera",
        category: "Camera",
        price: 89.99,
        get image() { return getProductImage(this.id, this.category); },
        description: "Bring back the magic of instant photography with the Retro Instant Camera. This stylish device delivers physical prints moments after taking your shot, combining vintage charm with modern features. Perfect for parties, weddings, and creating tangible memories in a digital world.",
        specs: {
            printSize: "2 x 3 inch (credit card size) instant prints",
            lens: "60mm f/12.7 lens",
            flash: "Built-in automatic flash with red-eye reduction",
            batteryLife: "Up to 100 prints per charge",
            selfieMode: "Built-in selfie mirror",
            specialModes: "Double exposure and macro modes",
            connectivity: "Bluetooth for remote shutter control"
        },
        features: [
            "Zero-ink technology with peel-off adhesive backing",
            "10 film sheets included in package",
            "Multiple color filters for creative effects",
            "Vintage-inspired design with modern reliability",
            "Companion app to print from smartphone"
        ]
    },
    {
        id: 23,
        name: "Premium Smartphone Galaxy",
        category: "Phone",
        price: 1099.99,
        get image() { return getProductImage(this.id, this.category); },
        description: "The Premium Smartphone Galaxy represents the pinnacle of mobile technology. With its exceptional camera system, lightning-fast performance, and stunning display, this flagship device delivers the ultimate smartphone experience for the most demanding users.",
        specs: {
            display: "6.8-inch Dynamic AMOLED 2X (3200 x 1440) 120Hz",
            processor: "Latest flagship 4nm octa-core processor",
            ram: "12GB LPDDR5",
            storage: "256GB/512GB/1TB UFS 4.0",
            camera: "108MP main, 12MP ultrawide, 10MP 3x telephoto, 10MP 10x periscope",
            battery: "5000mAh with 45W fast charging",
            protection: "IP68 water/dust resistance, Gorilla Glass Victus+"
        },
        features: [
            "S Pen support with Air Actions",
            "Space Zoom with 100x digital zoom capability",
            "8K video recording with Director's View",
            "Neural processing unit for AI photography",
            "Ultrasonic fingerprint sensor and facial recognition"
        ]
    },
    {
        id: 24,
        name: "Budget Smartphone Essential",
        category: "Phone",
        price: 349.99,
        get image() { return getProductImage(this.id, this.category); },
        description: "The Budget Smartphone Essential proves that affordability doesn't mean compromise. With a solid camera, reliable performance, and excellent battery life, this phone handles all the essentials with ease while maintaining a wallet-friendly price point.",
        specs: {
            display: "6.5-inch IPS LCD (2400 x 1080) 90Hz",
            processor: "Snapdragon 695 5G",
            ram: "6GB LPDDR4X",
            storage: "128GB (expandable via microSD)",
            camera: "50MP main, 8MP ultrawide, 2MP macro",
            battery: "5000mAh with 18W fast charging",
            connectivity: "5G, Wi-Fi 5, Bluetooth 5.1, NFC"
        },
        features: [
            "Side-mounted fingerprint sensor",
            "Stereo speakers with Dolby Atmos",
            "Two years of guaranteed OS updates",
            "Ultra power saving mode",
            "Headphone jack and FM radio"
        ]
    },
    {
        id: 25,
        name: "Gaming Smartphone Ultra",
        category: "Phone",
        price: 799.99,
        get image() { return getProductImage(this.id, this.category); },
        description: "Designed specifically for mobile gamers, the Gaming Smartphone Ultra delivers uncompromising performance, advanced cooling, and gamer-focused features. Dominate your competition with high refresh rates, responsive controls, and immersive audio.",
        specs: {
            display: "6.78-inch AMOLED (2448 x 1080) 144Hz",
            processor: "Snapdragon 8+ Gen 1",
            ram: "12GB LPDDR5",
            storage: "256GB UFS 3.1",
            cooling: "Vapor chamber cooling system",
            battery: "6000mAh with 65W fast charging",
            controls: "Pressure-sensitive gaming triggers"
        },
        features: [
            "RGB lighting with customizable effects",
            "Gaming mode with performance optimization",
            "Advanced haptic feedback system",
            "Quad speakers with gaming audio enhancements",
            "Side-mounted USB-C port for comfortable charging while gaming"
        ]
    },
    {
        id: 26,
        name: "Ultra-Compact Smartphone Mini",
        category: "Phone",
        price: 699.99,
        get image() { return getProductImage(this.id, this.category); },
        description: "The Ultra-Compact Smartphone Mini delivers flagship performance in a pocketable size. Perfect for those who want high-end features without the bulk of a large phone, this compact powerhouse fits comfortably in any hand or pocket without compromising on capabilities.",
        specs: {
            display: "5.4-inch OLED (2340 x 1080) 60Hz",
            processor: "A15 Bionic chip",
            ram: "6GB",
            storage: "128GB/256GB",
            camera: "Dual 12MP system (wide and ultrawide)",
            battery: "2,438mAh with wireless charging support",
            biometrics: "Face ID facial recognition"
        },
        features: [
            "MagSafe accessory ecosystem",
            "Ceramic Shield front for drop protection",
            "IP68 water and dust resistance",
            "Night mode on all cameras",
            "Cinematic mode video recording"
        ]
    },
    {
        id: 27,
        name: "Rugged Outdoor Smartphone",
        category: "Phone",
        price: 599.99,
        get image() { return getProductImage(this.id, this.category); },
        description: "Built for adventure, the Rugged Outdoor Smartphone withstands drops, water, dust, and extreme temperatures. With enhanced battery life, powerful speakers, and specialized outdoor features, it's the perfect companion for hiking, construction work, or any demanding environment.",
        specs: {
            display: "6.5-inch FHD+ (2400 x 1080) with extra bright mode",
            protection: "MIL-STD-810H certified, IP68/IP69K water and dust proof",
            processor: "MediaTek Dimensity 900",
            ram: "8GB",
            storage: "128GB (expandable)",
            battery: "8000mAh with reverse charging",
            extraFeatures: "Thermal imaging camera, barometer, compass"
        },
        features: [
            "Programmable physical button for emergency use",
            "Glove-friendly touch screen",
            "Extra loud 125dB speaker for noisy environments",
            "Night vision camera mode",
            "SOS emergency features with location sharing"
        ]
    },
    {
        id: 28,
        name: "5G Budget Phone Plus",
        category: "Phone",
        price: 249.99,
        get image() { return getProductImage(this.id, this.category); },
        description: "The 5G Budget Phone Plus makes next-generation connectivity affordable for everyone. With solid performance, a versatile camera system, and long battery life, this value-packed smartphone delivers an excellent overall experience without breaking the bank.",
        specs: {
            display: "6.6-inch LCD (2408 x 1080) 90Hz",
            processor: "MediaTek Dimensity 700",
            ram: "4GB",
            storage: "64GB (expandable via microSD)",
            camera: "48MP main, 8MP ultrawide, 2MP macro",
            battery: "5000mAh with 18W charging",
            connectivity: "5G, Wi-Fi 5, Bluetooth 5.1, NFC"
        },
        features: [
            "Side-mounted fingerprint sensor",
            "AI scene recognition camera",
            "Dual stereo speakers",
            "Three years of security updates",
            "Headphone jack and FM radio"
        ]
    },
    {
        id: 29,
        name: "Privacy-Focused Smartphone",
        category: "Phone",
        price: 899.99,
        get image() { return getProductImage(this.id, this.category); },
        description: "The Privacy-Focused Smartphone puts your data security first with hardware switches, encrypted communications, and enhanced security features. Designed for those who prioritize privacy without sacrificing the convenience of modern smartphone capabilities.",
        specs: {
            display: "6.1-inch OLED (2400 x 1080) 90Hz",
            processor: "Custom secure processor with security coprocessor",
            ram: "8GB LPDDR5",
            storage: "256GB UFS 3.1 encrypted storage",
            camera: "Dual 12MP cameras with physical privacy shutter",
            security: "Hardware encryption chip, secure boot",
            switches: "Physical switches for camera, microphone, and data"
        },
        features: [
            "Secure operating system with privacy controls",
            "End-to-end encrypted messaging and voice calls",
            "VPN service included",
            "Security dashboard with threat detection",
            "Privacy audited by independent researchers"
        ]
    },
    {
        id: 30,
        name: "Premium Bookshelf Speakers",
        category: "Speaker",
        price: 449.99,
        get image() { return getProductImage(this.id, this.category); },
        description: "The Premium Bookshelf Speakers deliver audiophile-quality sound in a compact form factor. With their carefully tuned acoustics, premium materials, and elegant design, these speakers transform any room into a high-fidelity listening environment for music, movies, and more.",
        specs: {
            type: "2-way passive bookshelf speakers (pair)",
            drivers: "1-inch silk dome tweeter, 5.25-inch aramid fiber woofer",
            frequency: "45Hz - 35kHz",
            sensitivity: "88dB @ 2.83V/1m",
            impedance: "6 ohms",
            powerHandling: "20-100W per channel",
            dimensions: "12.8 x 7.9 x 11.4 inches per speaker"
        },
        features: [
            "Hand-crafted cabinets with real wood veneer",
            "Acoustically transparent magnetic grilles",
            "Gold-plated binding posts for secure connections",
            "Front-firing port for flexible placement",
            "Internal bracing to minimize unwanted resonance"
        ]
    },
    {
        id: 31,
        name: "Portable Bluetooth Speaker Mini",
        category: "Speaker",
        price: 79.99,
        get image() { return getProductImage(this.id, this.category); },
        description: "Take your music anywhere with the Portable Bluetooth Speaker Mini. This compact yet powerful speaker delivers impressive sound quality, long battery life, and rugged durability. Perfect for outdoor adventures, travel, or moving from room to room.",
        specs: {
            drivers: "Dual 40mm full-range drivers with passive radiator",
            output: "16W total output",
            battery: "Up to 12 hours playtime at moderate volume",
            waterproof: "IPX7 waterproof (submersible up to 1m for 30 minutes)",
            connectivity: "Bluetooth 5.1, 3.5mm aux input",
            charging: "USB-C with fast charge support",
            dimensions: "3.1 x 3.1 x 6.9 inches"
        },
        features: [
            "Outdoor Boost mode for open-air environments",
            "Built-in microphone for speakerphone calls",
            "PartyUp feature to connect multiple speakers",
            "Carabiner clip for easy attachment to bags",
            "Bottle-shaped design fits in most cup holders"
        ]
    },
    {
        id: 32,
        name: "Wireless Surround Sound System",
        category: "Speaker",
        price: 899.99,
        get image() { return getProductImage(this.id, this.category); },
        description: "Transform your living room into a home theater with the Wireless Surround Sound System. This complete 5.1 package delivers immersive, high-definition audio without the hassle of running speaker wires throughout your room. Easy to set up and a joy to experience.",
        specs: {
            configuration: "5.1 channel system (soundbar, subwoofer, 2 wireless surrounds)",
            soundbar: "3-channel soundbar with dedicated center channel for clear dialogue",
            subwoofer: "10-inch wireless subwoofer with 200W amplifier",
            surrounds: "Wireless surround speakers with wall-mount option",
            connectivity: "HDMI eARC, optical, Bluetooth, Wi-Fi",
            formats: "Dolby Atmos, DTS:X, Dolby TrueHD",
            roomCalibration: "Automatic room acoustic calibration"
        },
        features: [
            "TrueSpace technology for immersive experience from any source",
            "Night mode for reduced bass and enhanced dialogue clarity",
            "Voice assistant compatibility (Alexa, Google Assistant)",
            "4K HDR HDMI passthrough",
            "Multiroom audio capability with compatible speakers"
        ]
    },
    {
        id: 33,
        name: "Audiophile Floor Standing Speakers",
        category: "Speaker",
        price: 1499.99,
        get image() { return getProductImage(this.id, this.category); },
        description: "Experience sound as the artist intended with the Audiophile Floor Standing Speakers. These premium towers deliver full-range audio with exceptional detail, presence, and soundstage. Hand-crafted for the discerning listener who demands the very best in audio reproduction.",
        specs: {
            type: "3-way floor standing speakers (pair)",
            drivers: "1-inch beryllium tweeter, 5.25-inch midrange, dual 8-inch woofers",
            frequency: "28Hz - 40kHz",
            sensitivity: "92dB @ 2.83V/1m",
            impedance: "8 ohms (compatible with 4 ohm amplifiers)",
            powerHandling: "50-300W per channel",
            dimensions: "43.5 x 11.7 x 16.2 inches per speaker"
        },
        features: [
            "Cabinets made of high-density fiberboard with internal bracing",
            "Bi-wire/bi-amp capability with premium terminals",
            "Precision-engineered crossover network with audiophile components",
            "Adjustable spiked feet for stable coupling to floor",
            "Available in piano black, walnut, or cherry wood finishes"
        ]
    },
    {
        id: 34,
        name: "Party Speaker System",
        category: "Speaker",
        price: 349.99,
        get image() { return getProductImage(this.id, this.category); },
        description: "Get the party started with this high-energy speaker system. With powerful bass, dazzling light effects, and karaoke functionality, it transforms any gathering into an unforgettable celebration. Portable enough to take anywhere but powerful enough to fill large spaces with immersive sound.",
        specs: {
            output: "1000W peak power",
            drivers: "12-inch woofer, 1-inch tweeter",
            battery: "Up to 24 hours playtime at moderate volume",
            lighting: "360° customizable LED light show synced to music",
            inputs: "Bluetooth, USB, 3.5mm, guitar/microphone inputs",
            wheels: "Built-in wheels and telescoping handle for portability",
            extras: "DJ effects panel, voice changer, echo control"
        },
        features: [
            "Wireless party linking for connecting multiple speakers",
            "Karaoke mode with dual microphone inputs",
            "Splash-proof design for poolside use",
            "Dedicated app for lighting and sound control",
            "Guitar input for impromptu performances"
        ]
    },
    {
        id: 35,
        name: "Desktop PC Speakers",
        category: "Speaker",
        price: 149.99,
        get image() { return getProductImage(this.id, this.category); },
        description: "Upgrade your desktop audio experience with these precision-engineered computer speakers. Designed to deliver clear, detailed sound for music, games, and video, these compact speakers make the perfect addition to any workspace or gaming setup.",
        specs: {
            configuration: "2.1 system with subwoofer",
            satellites: "3-inch full-range drivers in each satellite",
            subwoofer: "5-inch down-firing woofer in wooden enclosure",
            power: "60W total system power",
            inputs: "USB audio, 3.5mm auxiliary, Bluetooth 5.0",
            controls: "Wired control pod with volume, bass, and headphone output",
            dimensions: "Satellites: 5 x 3 x 6 inches each, Subwoofer: 8 x 9 x 10 inches"
        },
        features: [
            "USB-powered with no need for external power adapter",
            "Custom-tuned DSP for enhanced clarity",
            "RGB lighting with multiple effects and modes",
            "Headphone pass-through for private listening",
            "Magnetic shielding to prevent monitor interference"
        ]
    }
];

function getAllProducts() {
    return products;
}

function getProductById(id) {
    return products.find(product => product.id === id) || null;
}

function getProductsByCategory(category) {
    if (category === 'All') return products;
    return products.filter(product => product.category === category);
}