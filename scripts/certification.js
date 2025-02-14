const certifications = [
    {
        img: "images/certifications/certification-1.png",
        title: "JavaScript DSA",
        issuer: "Issued by freeCodeCamp",
        link: "https://freecodecamp.org/certification/fccc37dcbb4-6eb7-444e-afc3-a726f368d480/javascript-algorithms-and-data-structures-v8"
    },
    {
        img: "images/certifications/certification-2.png",
        title: "Responsive Web Design",
        issuer: "Issued by freeCodeCamp",
        link: "https://freecodecamp.org/certification/fccc37dcbb4-6eb7-444e-afc3-a726f368d480/responsive-web-design"
    },
    {
        img: "images/certifications/certification-3.png",
        title: "JavaScript Certificate",
        issuer: "Issued by HackerRank",
        link: "https://www.hackerrank.com/certificates/iframe/63bd5470a0b7"
    },
    {
        img: "images/certifications/certification-4.png",
        title: "SQL Certificate",
        issuer: "Issued by HackerRank",
        link: "https://www.hackerrank.com/certificates/iframe/caf7f45d08e6"
    },
    {
        img: "images/certifications/certification-5.png",
        title: "CSS Certificate",
        issuer: "Issued by HackerRank",
        link: "https://www.hackerrank.com/certificates/iframe/5214ad063526"
    },
];



const certificationsContainer = document.getElementById("certifications-container");

function getInitialCertificationsCount() {
    return window.innerWidth <= 768 ? 2 : 4;
}

let initialCertifications = getInitialCertificationsCount();

function loadCertifications() {
    let html = "";
    for (let i = 0; i < certifications.length; i++) {
        const cert = certifications[i];
        html += `
            <div class="col-lg-3 col-md-6 cert-item" style="${i < initialCertifications ? '' : 'display: none;'}">
                <a href="${cert.link}" target="_blank" class="cert-link">
                    <div class="cert-box text-center">
                        <img src="${cert.img}" alt="${cert.title}" class="cert-img mb-3">
                        <h5>${cert.title}</h5>
                        <p>${cert.issuer}</p>
                    </div>
                </a>
            </div>
        `;
    }
    certificationsContainer.innerHTML = html;

    if (certifications.length <= initialCertifications) {
        document.getElementById("load-more-cert-btn").style.display = "none";
    }
}

function showAllCertifications() {
    document.querySelectorAll(".cert-item").forEach(item => {
        item.style.display = "block";
    });
    document.getElementById("load-more-cert-btn").style.display = "none";
}

loadCertifications();

const loadMoreCertButton = document.createElement("button");
loadMoreCertButton.id = "load-more-cert-btn";
loadMoreCertButton.textContent = "Load More";
loadMoreCertButton.className = "btn btn-primary mt-3";
loadMoreCertButton.addEventListener("click", showAllCertifications);

certificationsContainer.insertAdjacentElement("afterend", loadMoreCertButton);

window.addEventListener("resize", () => {
    let newInitialCertifications = getInitialCertificationsCount();
    if (newInitialCertifications !== initialCertifications) {
        initialCertifications = newInitialCertifications;
        loadCertifications();
    }
});


