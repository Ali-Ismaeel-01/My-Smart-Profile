("use strict");

// *******************About Me Page*******************
// Dark Mode / Light Mode
document.addEventListener("DOMContentLoaded", function () {
    const switcherBtn = document.getElementById("theme-switcher");
    if (!switcherBtn) return;
    const icon = switcherBtn.querySelector("i");
    const aboutMeCard = document.getElementById("about-section-id");
    if (!icon || !aboutMeCard) return;

    switcherBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (switcherBtn.classList.contains("dark-switcher")) {
            switcherBtn.classList.remove("dark-switcher");
            switcherBtn.classList.add("light-switcher");
            aboutMeCard.classList.add("about-section-dark-mode");
        } else {
            switcherBtn.classList.remove("light-switcher");
            switcherBtn.classList.add("dark-switcher");
            aboutMeCard.classList.remove("about-section-dark-mode");
        }

        if (icon.classList.contains("fa-moon")) {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        } else {
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        }
    });
});

// Show Me Button
document.addEventListener("DOMContentLoaded", function () {
    const showMoreBtn = document.getElementById("showMoreBtn");
    const moreContent = document.getElementById("more-content");
    if (showMoreBtn && moreContent) {
        showMoreBtn.addEventListener("click", function () {
            moreContent.classList.toggle("hidden");
        });
    }
});

// *******************Portfolio Page*******************
function update() {
    const dynamicCard = document.getElementById("dynamicCard");
    const title = document.getElementById("cardTitle");
    const text = document.getElementById("cardText");
    const image = document.getElementById("cardImage");
    const description = document.getElementById("cardDesc");

    dynamicCard.classList.toggle("updated");

    if (!dynamicCard.classList.contains("updated")) {
        title.textContent = "Fylo - Secure, accessible file storage";
        text.textContent = "Efficient, user-friendly cloud solution";
        image.src =
            "images/Fylo Secure, accessible file storage - Project 4.jpg";
        description.textContent =
            "A modern file storage and organization platform with a clean design, featuring secure file access and a user-friendly interface, highlighted by an illustrative central image of file management. The platform emphasizes ease of use with its intuitive layout and vibrant visuals, making it ideal for both personal and professional use.";
    } else {
        title.textContent = "Joseph Shmoe | Ceramics";
        text.textContent = "(Artist Portfolio / Gallery)";
        image.src = "images/Joseph Shmoe Ceramics - Project 1.jpg";
        description.textContent =
            "A minimalist, elegant website designed to showcase handcrafted ceramics. The layout emphasizes clean lines, ample whitespace, and high-resolution photography to highlight the textures and forms of each piece. Built with a focus on visual storytelling, the site lets the artwork speak for itself while providing a seamless user experience.";
    }
}

// *******************Fun Page*******************
$(document).ready(function () {
    // Fade In/Out functionality
    $("#fadeInBtn").click(function () {
        $("#fadeImage").fadeIn(1000);
    });

    $("#fadeOutBtn").click(function () {
        $("#fadeImage").fadeOut(1000);
    });

    // Slide Toggle functionality
    $("#toggleFactsBtn").click(function () {
        $("#factsContainer").slideToggle(400);

        if ($(this).text() === "Hide Facts") {
            $(this).text("Show Facts");
        } else {
            $(this).text("Hide Facts");
        }
    });

    // Use jQuery AJAX to load the quotes from quotes.txt
    $("#loadQuoteBtn").click(function () {
        $.get("quotes.txt", function (data) {
            const quotes = data.split("\n");

            const randomIndex = Math.trunc(Math.random() * quotes.length);
            const quoteData = quotes[randomIndex].split("|");

            $("#quoteText").text(quoteData[0].trim());
            $("#quoteAuthor").text(quoteData[1].trim());
        });
    });
});

// *******************Smart Page*******************
$(document).ready(function () {
    // تحية شخصية فورية عند الكتابة
    $("#nameInput").on("keyup", function () {
        const name = $(this).val();
        if (name.trim() !== "") {
            $("#greeting").text(
                `Hello, ${name}! Welcome to our smart interactions page.`
            );
        } else {
            $("#greeting").text("Hello there! Start typing your name above.");
        }
    });

    // تغيير لون الخلفية عند التمرير
    $("#colorBox").hover(
        function () {
            $(this)
                .css("background-color", "#6c757d")
                .text("Hovering! Now I'm Gray.")
                .css("transform", "scale(1.05)");
        },
        function () {
            $(this)
                .css("background-color", "#198754")
                .text("Hover over me to change color!")
                .css("transform", "scale(1)");
        }
    );

    // تأثير الارتداد عند النقر
    $("#animateBox").click(function () {
        $(this).addClass("bounce-effect");
        setTimeout(() => {
            $(this).removeClass("bounce-effect");
        }, 500);

        $(this).text("Bouncing! Click me again.");
        setTimeout(() => {
            $(this).text("Click me to bounce!");
        }, 2000);
    });

    // تأثير التلاشي
    $("#fadeBtn").click(function () {
        $("#fadeElement").fadeToggle(500);
    });

    // تأثير الانزلاق
    $("#slideBtn").click(function () {
        $("#slideElement").slideToggle(500);
    });

    // تبديل الثيم (فاتح/غامق)
    $("#theme-switcher").click(function () {
        $("body").toggleClass("dark-mode-smart");
        const icon = $(this).find("i");
        if ($("body").hasClass("dark-mode-smart")) {
            icon.removeClass("fa-moon").addClass("fa-sun");
            $(this).css("background-color", "#f8f9fa").css("color", "#012b50");
        } else {
            icon.removeClass("fa-sun").addClass("fa-moon");
            $(this).css("background-color", "#012b50").css("color", "white");
        }
    });
});
