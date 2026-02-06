// Tambahin di script buat efek makin serem:
// 1. Fake system notification
setInterval(() => {
    if (Notification.permission === "granted") {
        new Notification("⚠️ SECURITY ALERT", {
            body: "Malware activity detected!",
            icon: "https://img.icons8.com/color/96/000000/security-configuration.png"
        });
    }
}, 60000);

// 2. Fake file deletion countdown
let fakeFiles = ["photos", "contacts", "messages", "bank_data"];
setInterval(() => {
    if (attempts < 3) {
        let file = fakeFiles[Math.floor(Math.random() * fakeFiles.length)];
        console.log(`Deleting ${file}...`);
        // Bisa tambah fake log di layar
    }
}, 15000);