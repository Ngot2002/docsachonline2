
async function increaseViewCount() {
    const res = await fetch("https://firestore.googleapis.com/v1/projects/YOUR_PROJECT_ID/databases/(default)/documents/views/sach", {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            fields: {
                count: { integerValue: ++window.viewCount }
            }
        })
    });
}

async function loadViewCount() {
    const res = await fetch("https://firestore.googleapis.com/v1/projects/YOUR_PROJECT_ID/databases/(default)/documents/views/sach");
    const data = await res.json();
    const count = data.fields?.count?.integerValue || 0;
    window.viewCount = parseInt(count);
    document.getElementById("view-count").innerText = `Đã có ${count} lượt đọc`;
}

loadViewCount();
