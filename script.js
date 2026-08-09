// ============================================================
// DEVELOPMENT MODE
// ============================================================

// Change this to false when you want the password screen back.
const DEVELOPMENT_MODE = true;


// ============================================================
// GRAMMAR COURSES
// ============================================================

// This array contains all grammar courses.
const COURSES = [

    // Course 1.
    {
        title: "Present Simple",
        description:
            "شرح قاعدة المضارع البسيط واستخداماته الأساسية مع أمثلة تساعدك على فهم أسئلة STEP.",
        video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
    },

    // Course 2.
    {
        title: "Present Continuous",
        description:
            "تعلم استخدام المضارع المستمر وكيفية تمييزه في الجمل والأسئلة.",
        video: "videos/present-continuous.mp4"
    },

    // Course 3.
    {
        title: "Past Simple",
        description:
            "شرح الماضي البسيط وطريقة تكوين الجمل والأسئلة والنفي.",
        video: "videos/past-simple.mp4"
    },

    // Course 4.
    {
        title: "Future",
        description:
            "تعرف على أهم طرق التعبير عن المستقبل والأسئلة الشائعة في STEP.",
        video: "videos/future.mp4"
    },

    // Course 5.
    {
        title: "Comparatives",
        description:
            "شرح المقارنة بين الأشياء والأشخاص مع أهم القواعد والأخطاء الشائعة.",
        video: "videos/comparatives.mp4"
    },

    // Course 6.
    {
        title: "Superlatives",
        description:
            "تعلم صيغة التفضيل وكيفية اختيار الإجابة الصحيحة بسرعة.",
        video: "videos/superlatives.mp4"
    },

    // Course 7.
    {
        title: "Modal Verbs",
        description:
            "شرح الأفعال الناقصة مثل can و should و must بطريقة مناسبة لاختبار STEP.",
        video: "videos/modal-verbs.mp4"
    },

    // Course 8.
    {
        title: "Vocabulary",
        description:
            "طريقة التعامل مع أسئلة المفردات والمرادفات واختيار الكلمة الأقرب في المعنى.",
        video: "videos/vocabulary.mp4"
    },

    // Course 9.
    {
        title: "Reading Skills",
        description:
            "استراتيجيات القراءة والبحث عن الكلمات المفتاحية للوصول إلى الإجابة بسرعة.",
        video: "videos/reading-skills.mp4"
    },

    // Course 10.
    {
        title: "Listening Skills",
        description:
            "استراتيجيات مهمة لفهم المقاطع الصوتية والتركيز على المعلومات التي تقود للإجابة.",
        video: "videos/listening-skills.mp4"
    }

];


// ============================================================
// READING QUESTIONS
// ============================================================

// This array contains 10 reading questions.
const READING_QUESTIONS = [

    {
        number: 1,
        title: "Reading Question 01",
        description: "اقرأ القطعة ثم اختر الإجابة الصحيحة."
    },

    {
        number: 2,
        title: "Reading Question 02",
        description: "حدد الفكرة الرئيسية للقطعة."
    },

    {
        number: 3,
        title: "Reading Question 03",
        description: "ابحث عن المعلومة المطلوبة داخل النص."
    },

    {
        number: 4,
        title: "Reading Question 04",
        description: "اختر الإجابة التي يدعمها النص."
    },

    {
        number: 5,
        title: "Reading Question 05",
        description: "حدد معنى الكلمة من سياق النص."
    },

    {
        number: 6,
        title: "Reading Question 06",
        description: "حدد المعلومة الصحيحة حسب القطعة."
    },

    {
        number: 7,
        title: "Reading Question 07",
        description: "ابحث عن التفاصيل المهمة في النص."
    },

    {
        number: 8,
        title: "Reading Question 08",
        description: "حدد الاستنتاج الصحيح من القطعة."
    },

    {
        number: 9,
        title: "Reading Question 09",
        description: "اختر الإجابة الأقرب لما ورد في النص."
    },

    {
        number: 10,
        title: "Reading Question 10",
        description: "اختر الإجابة الصحيحة بناءً على القطعة."
    }

];


// ============================================================
// LISTENING QUESTIONS
// ============================================================

// This array contains 10 listening questions.
const LISTENING_QUESTIONS = [

    {
        number: 1,
        title: "Listening Question 01",
        description: "استمع إلى المقطع ثم اختر الإجابة الصحيحة."
    },

    {
        number: 2,
        title: "Listening Question 02",
        description: "استمع جيدًا وحدد المعلومة المطلوبة."
    },

    {
        number: 3,
        title: "Listening Question 03",
        description: "حدد الفكرة الرئيسية للمقطع."
    },

    {
        number: 4,
        title: "Listening Question 04",
        description: "استمع إلى التفاصيل واختر الإجابة الصحيحة."
    },

    {
        number: 5,
        title: "Listening Question 05",
        description: "حدد ما يقوله المتحدث في المقطع."
    },

    {
        number: 6,
        title: "Listening Question 06",
        description: "استمع وحدد المعلومة الصحيحة."
    },

    {
        number: 7,
        title: "Listening Question 07",
        description: "ركز على الكلمات والمعلومات المهمة."
    },

    {
        number: 8,
        title: "Listening Question 08",
        description: "حدد الاستنتاج الصحيح بعد الاستماع."
    },

    {
        number: 9,
        title: "Listening Question 09",
        description: "اختر الإجابة التي تتوافق مع المقطع."
    },

    {
        number: 10,
        title: "Listening Question 10",
        description: "استمع جيدًا ثم اختر الإجابة الصحيحة."
    }

];


// ============================================================
// GET HTML ELEMENTS
// ============================================================

// Get the login screen.
const accessScreen =
    document.getElementById("accessScreen");

// Get the main website.
const mainWebsite =
    document.getElementById("mainWebsite");

// Get the password input.
const passwordInput =
    document.getElementById("passwordInput");

// Get the consent checkbox.
const consentCheck =
    document.getElementById("consentCheck");

// Get the login button.
const continueBtn =
    document.getElementById("continueBtn");

// Get the error message.
const accessError =
    document.getElementById("accessError");

// Get the single theme toggle button.
const themeToggle =
    document.getElementById("themeToggle");

// Get grammar grid.
const courseGrid =
    document.getElementById("courseGrid");

// Get reading grid.
const readingGrid =
    document.getElementById("readingGrid");

// Get listening grid.
const listeningGrid =
    document.getElementById("listeningGrid");

// Get video modal.
const courseModal =
    document.getElementById("courseModal");

// Get close button.
const closeModalBtn =
    document.getElementById("closeModalBtn");

// Get modal title.
const modalTitle =
    document.getElementById("modalTitle");

// Get lesson title.
const lessonTitle =
    document.getElementById("lessonTitle");

// Get lesson description.
const lessonDescription =
    document.getElementById("lessonDescription");

// Get video.
const courseVideo =
    document.getElementById("courseVideo");

// Get placeholder.
const videoPlaceholder =
    document.getElementById("videoPlaceholder");

// Get play button.
const playBtn =
    document.getElementById("playBtn");

// Get progress bar.
const progressBar =
    document.getElementById("progressBar");

// Get current time.
const currentTime =
    document.getElementById("currentTime");

// Get duration.
const durationTime =
    document.getElementById("durationTime");

// Get volume.
const volumeBar =
    document.getElementById("volumeBar");

// Get speed selector.
const speedSelect =
    document.getElementById("speedSelect");

// Get fullscreen button.
const fullscreenBtn =
    document.getElementById("fullscreenBtn");

// Get previous button.
const previousBtn =
    document.getElementById("previousBtn");

// Get next button.
const nextBtn =
    document.getElementById("nextBtn");

// Get exam simulator button.
const examSimulatorBtn =
    document.getElementById("examSimulatorBtn");


// ============================================================
// CURRENT COURSE
// ============================================================

// This remembers which grammar course is open.
let currentCourseIndex = 0;


// ============================================================
// CREATE GRAMMAR COURSES
// ============================================================

// This function creates the 10 grammar cards.
function renderCourses() {

    // Clear the grid.
    courseGrid.innerHTML = "";


    // Go through every course.
    COURSES.forEach((course, index) => {

        // Create a card.
        const card =
            document.createElement("article");


        // Give it the course-card CSS class.
        card.className = "course-card";


        // Add the card content.
        card.innerHTML = `

            <div class="course-number">
                ${String(index + 1).padStart(2, "0")}
            </div>

            <h4>
                ${course.title}
            </h4>

            <p>
                ${course.description}
            </p>

            <button
                class="course-btn"
                data-course-index="${index}"
            >
                مشاهدة الدرس
            </button>

        `;


        // Add the card to the page.
        courseGrid.appendChild(card);

    });


    // Find all course buttons.
    const buttons =
        document.querySelectorAll(
            "[data-course-index]"
        );


    // Add a click event to every button.
    buttons.forEach((button) => {

        button.addEventListener("click", () => {

            // Get the course number.
            const index =
                Number(button.dataset.courseIndex);

            // Open the course.
            openCourse(index);

        });

    });

}


// ============================================================
// CREATE READING AND LISTENING CARDS
// ============================================================

// This function creates question cards.
function renderQuestionSection(
    questions,
    containerId
) {

    // Find the correct grid.
    const container =
        document.getElementById(containerId);


    // Clear the grid.
    container.innerHTML = "";


    // Go through all questions.
    questions.forEach((question) => {

        // Create a card.
        const card =
            document.createElement("article");


        // Give the card its CSS class.
        card.className = "course-card";


        // Create the card content.
        card.innerHTML = `

            <div class="course-number">
                ${String(question.number).padStart(2, "0")}
            </div>

            <h4>
                ${question.title}
            </h4>

            <p>
                ${question.description}
            </p>

            <button
                class="course-btn question-btn"
                data-question-number="${question.number}"
            >
                بدء السؤال
            </button>

        `;


        // Add the card to the page.
        container.appendChild(card);

    });


    // Find the question buttons.
    const questionButtons =
        container.querySelectorAll(
            ".question-btn"
        );


    // Add click events.
    questionButtons.forEach((button) => {

        button.addEventListener("click", () => {

            // Get the question number.
            const questionNumber =
                button.dataset.questionNumber;


            // For now show a message.
            alert(
                `سيتم فتح السؤال رقم ${questionNumber} هنا.\n\nسنضيف الأسئلة الفعلية في الخطوة التالية.`
            );

        });

    });

}


// ============================================================
// OPEN COURSE
// ============================================================

// This opens a grammar course.
function openCourse(index) {

    // Remember the current course.
    currentCourseIndex = index;


    // Get the course information.
    const course =
        COURSES[currentCourseIndex];


    // Change the modal title.
    modalTitle.textContent =
        course.title;


    // Change lesson title.
    lessonTitle.textContent =
        course.title;


    // Change lesson description.
    lessonDescription.textContent =
        course.description;


    // Stop the previous video.
    courseVideo.pause();


    // Tell the video element where the video is.
    courseVideo.src =
        course.video;


    // Reload the video.
    courseVideo.load();


    // Show the placeholder.
    videoPlaceholder.classList.remove("hidden");


    // Show the modal.
    courseModal.classList.remove("hidden");


    // Prevent background scrolling.
    document.body.style.overflow =
        "hidden";


    // Update previous and next buttons.
    updateNavigationButtons();

}


// ============================================================
// CLOSE COURSE
// ============================================================

// This closes the video player.
function closeCourse() {

    // Stop the video.
    courseVideo.pause();


    // Remove the video source.
    courseVideo.removeAttribute("src");


    // Reload the video.
    courseVideo.load();


    // Hide the modal.
    courseModal.classList.add("hidden");


    // Allow page scrolling again.
    document.body.style.overflow = "";

}


// ============================================================
// PREVIOUS AND NEXT
// ============================================================

// This controls previous and next buttons.
function updateNavigationButtons() {

    // Disable previous on first course.
    previousBtn.disabled =
        currentCourseIndex === 0;


    // Disable next on last course.
    nextBtn.disabled =
        currentCourseIndex ===
        COURSES.length - 1;

}


// ============================================================
// FORMAT VIDEO TIME
// ============================================================

// Convert seconds into MM:SS.
function formatTime(seconds) {

    // Return 00:00 if invalid.
    if (!Number.isFinite(seconds)) {
        return "00:00";
    }


    // Calculate minutes.
    const minutes =
        Math.floor(seconds / 60);


    // Calculate seconds.
    const secondsPart =
        Math.floor(seconds % 60);


    // Return formatted time.
    return `${String(minutes).padStart(2, "0")}:${String(secondsPart).padStart(2, "0")}`;

}


// ============================================================
// LOGIN
// ============================================================

// When the login button is clicked.
continueBtn.addEventListener(
    "click",
    () => {

        // Get password.
        const password =
            passwordInput.value;


        // Check if it contains exactly four numbers.
        if (!/^\d{4}$/.test(password)) {

            accessError.textContent =
                "الرجاء إدخال رمز مكوّن من 4 أرقام.";

            return;
        }


        // Check password.
        if (password !== "1111") {

            accessError.textContent =
                "رمز الدخول غير صحيح.";

            return;
        }


        // Check consent.
        if (!consentCheck.checked) {

            accessError.textContent =
                "يجب الموافقة على التعهد قبل الدخول.";

            return;
        }


        // Hide login.
        accessScreen.classList.add("hidden");


        // Show website.
        mainWebsite.classList.remove("hidden");


        // Create courses.
        renderCourses();


        // Create reading questions.
        renderQuestionSection(
            READING_QUESTIONS,
            "readingGrid"
        );


        // Create listening questions.
        renderQuestionSection(
            LISTENING_QUESTIONS,
            "listeningGrid"
        );

    }
);


// ============================================================
// PASSWORD INPUT
// ============================================================

// Listen for typing.
passwordInput.addEventListener(
    "input",
    () => {

        // Remove anything that isn't a number.
        passwordInput.value =
            passwordInput.value.replace(/\D/g, "");


        // Limit to four numbers.
        passwordInput.value =
            passwordInput.value.slice(0, 4);

    }
);

// ============================================================
// THEME TOGGLE
// ============================================================

// Listen for clicks on the theme button.
themeToggle.addEventListener(
    "click",
    () => {

        // Toggle dark mode on or off.
        document.body.classList.toggle("dark");

        // Check whether dark mode is currently active.
        const isDark =
            document.body.classList.contains("dark");

        // Change the icon depending on the current mode.
        themeToggle.textContent =
            isDark ? "☀️" : "🌙";

        // Save the selected theme.
        localStorage.setItem(
            "theme",
            isDark ? "dark" : "light"
        );

    }
);

// ============================================================
// RESTORE SAVED THEME
// ============================================================

// Get the previously saved theme.
const savedTheme =
    localStorage.getItem("theme");

// Check if the saved theme is dark.
if (savedTheme === "dark") {

    // Activate dark mode.
    document.body.classList.add("dark");

    // Show the sun because clicking it will return to light mode.
    themeToggle.textContent = "☀️";

} else {

    // Show the moon in light mode.
    themeToggle.textContent = "🌙";

}

// ============================================================
// CLOSE BUTTON
// ============================================================

// Close modal when X is clicked.
closeModalBtn.addEventListener(
    "click",
    closeCourse
);


// ============================================================
// CLICK OUTSIDE VIDEO
// ============================================================

// Listen for clicks on the modal.
courseModal.addEventListener(
    "click",
    (event) => {

        // Check if the overlay itself was clicked.
        if (
            event.target ===
            courseModal
        ) {

            // Close the course.
            closeCourse();

        }

    }
);


// ============================================================
// ESCAPE KEY
// ============================================================

// Listen for keyboard keys.
document.addEventListener(
    "keydown",
    (event) => {

        // Check Escape.
        if (
            event.key === "Escape" &&
            !courseModal.classList.contains("hidden")
        ) {

            // Close the modal.
            closeCourse();

        }

    }
);


// ============================================================
// PLAY / PAUSE
// ============================================================

// Play button.
playBtn.addEventListener(
    "click",
    () => {

        // If video is paused.
        if (courseVideo.paused) {

            // Play video.
            courseVideo.play();

        } else {

            // Otherwise pause it.
            courseVideo.pause();

        }

    }
);


// Change button when video starts.
courseVideo.addEventListener(
    "play",
    () => {

        playBtn.textContent = "❚❚";

    }
);


// Change button when video pauses.
courseVideo.addEventListener(
    "pause",
    () => {

        playBtn.textContent = "▶";

    }
);


// ============================================================
// VIDEO PROGRESS
// ============================================================

// Update progress while playing.
courseVideo.addEventListener(
    "timeupdate",
    () => {

        // Check duration.
        if (courseVideo.duration) {

            // Calculate percentage.
            progressBar.value =
                (courseVideo.currentTime /
                    courseVideo.duration) *
                100;


            // Show current time.
            currentTime.textContent =
                formatTime(
                    courseVideo.currentTime
                );

        }

    }
);


// ============================================================
// VIDEO LOADED
// ============================================================

// When video information loads.
courseVideo.addEventListener(
    "loadedmetadata",
    () => {

        // Hide placeholder.
        videoPlaceholder.classList.add("hidden");


        // Show duration.
        durationTime.textContent =
            formatTime(
                courseVideo.duration
            );


        // Reset current time.
        currentTime.textContent =
            "00:00";


        // Reset progress.
        progressBar.value = 0;

    }
);


// ============================================================
// VIDEO ERROR
// ============================================================

// If video fails to load.
courseVideo.addEventListener(
    "error",
    () => {

        // Show placeholder.
        videoPlaceholder.classList.remove("hidden");

    }
);


// ============================================================
// PROGRESS BAR
// ============================================================

// When progress bar moves.
progressBar.addEventListener(
    "input",
    () => {

        // Check duration.
        if (courseVideo.duration) {

            // Change video position.
            courseVideo.currentTime =
                (Number(progressBar.value) /
                    100) *
                courseVideo.duration;

        }

    }
);


// ============================================================
// VOLUME
// ============================================================

// Change volume.
volumeBar.addEventListener(
    "input",
    () => {

        // Set video volume.
        courseVideo.volume =
            Number(volumeBar.value);

    }
);


// ============================================================
// PLAYBACK SPEED
// ============================================================

// Change playback speed.
speedSelect.addEventListener(
    "change",
    () => {

        // Set video speed.
        courseVideo.playbackRate =
            Number(speedSelect.value);

    }
);


// ============================================================
// FULLSCREEN
// ============================================================

// ============================================================
// FULLSCREEN
// ============================================================

// ============================================================
// FULLSCREEN
// ============================================================

// This controls the fullscreen button.
fullscreenBtn.addEventListener(
    "click",
    async () => {

        // Try the standard fullscreen method first.
        if (courseVideo.requestFullscreen) {

            try {

                // Open the video in fullscreen.
                await courseVideo.requestFullscreen();

                return;

            } catch (error) {

                // Continue to the next method if this fails.
                console.log(
                    "Standard fullscreen failed.",
                    error
                );

            }

        }

        // iPhone and iPad Safari use this method.
        if (courseVideo.webkitEnterFullscreen) {

            try {

                // Open Apple's native video fullscreen player.
                courseVideo.webkitEnterFullscreen();

                return;

            } catch (error) {

                // Continue if this method also fails.
                console.log(
                    "iOS fullscreen failed.",
                    error
                );

            }

        }

        // Some older browsers use this method.
        if (courseVideo.webkitRequestFullscreen) {

            try {

                // Try the older WebKit fullscreen method.
                await courseVideo.webkitRequestFullscreen();

                return;

            } catch (error) {

                // Continue if this method fails.
                console.log(
                    "WebKit fullscreen failed.",
                    error
                );

            }

        }

        // Some older Firefox versions use this method.
        if (courseVideo.mozRequestFullScreen) {

            try {

                // Try Firefox's older fullscreen method.
                await courseVideo.mozRequestFullScreen();

                return;

            } catch (error) {

                // Continue if this method fails.
                console.log(
                    "Firefox fullscreen failed.",
                    error
                );

            }

        }

        // Some older Microsoft browsers use this method.
        if (courseVideo.msRequestFullscreen) {

            try {

                // Try Microsoft's older fullscreen method.
                await courseVideo.msRequestFullscreen();

                return;

            } catch (error) {

                // Continue if this method fails.
                console.log(
                    "Microsoft fullscreen failed.",
                    error
                );

            }

        }

        // Tell the user if no fullscreen method is available.
        alert(
            "ملء الشاشة غير متاح على هذا الجهاز أو المتصفح."
        );

    }
);


// ============================================================
// PREVIOUS LESSON
// ============================================================

// Previous button.
previousBtn.addEventListener(
    "click",
    () => {

        // Make sure there is a previous course.
        if (
            currentCourseIndex > 0
        ) {

            // Open previous course.
            openCourse(
                currentCourseIndex - 1
            );

        }

    }
);


// ============================================================
// NEXT LESSON
// ============================================================

// Next button.
nextBtn.addEventListener(
    "click",
    () => {

        // Make sure there is another course.
        if (
            currentCourseIndex <
            COURSES.length - 1
        ) {

            // Open next course.
            openCourse(
                currentCourseIndex + 1
            );

        }

    }
);


// ============================================================
// BLOCK RIGHT CLICK ON VIDEO
// ============================================================

// Prevent normal right-click on video.
courseVideo.addEventListener(
    "contextmenu",
    (event) => {

        // Stop the browser menu.
        event.preventDefault();

    }
);


// ============================================================
// EXAM SIMULATOR BUTTON
// ============================================================

// Check that the button exists.
if (examSimulatorBtn) {

    // Listen for a click.
    examSimulatorBtn.addEventListener(
        "click",
        () => {

            // Open the exam simulator page.
            window.location.href =
                "exam-simulator.html";

        }
    );

}


// ============================================================
// DEVELOPMENT MODE
// ============================================================

// If development mode is enabled.
if (DEVELOPMENT_MODE) {

    // Hide password screen.
    accessScreen.classList.add("hidden");


    // Show main website.
    mainWebsite.classList.remove("hidden");


    // Create grammar courses.
    renderCourses();


    // Create reading questions.
    renderQuestionSection(
        READING_QUESTIONS,
        "readingGrid"
    );


    // Create listening questions.
    renderQuestionSection(
        LISTENING_QUESTIONS,
        "listeningGrid"
    );

}