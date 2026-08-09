// This line creates the list of all courses.
// You can add more courses later by adding another object inside this list.
const COURSES = [
  // This is course number 1.
  {
    // This is the English title of the course.
    title: "Present Simple",

    // This is the Arabic description shown to the student.
    description:
      "شرح قاعدة المضارع البسيط واستخداماته الأساسية مع أمثلة تساعدك على فهم الأسئلة في اختبار STEP.",

    // This is where the video file for this course will be located.
    video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
  },

  // This is course number 2.
  {
    title: "Present Continuous",
    description:
      "تعلم استخدام المضارع المستمر وكيفية تمييزه في الجمل والأسئلة.",
    video: "videos/present-continuous.mp4"
  },

  // This is course number 3.
  {
    title: "Past Simple",
    description:
      "شرح الماضي البسيط وطريقة تكوين الجمل والأسئلة والنفي.",
    video: "videos/past-simple.mp4"
  },

  // This is course number 4.
  {
    title: "Future",
    description:
      "تعرف على أهم طرق التعبير عن المستقبل والأسئلة الشائعة في STEP.",
    video: "videos/future.mp4"
  },

  // This is course number 5.
  {
    title: "Comparatives",
    description:
      "شرح المقارنة بين الأشياء والأشخاص مع أهم القواعد والأخطاء الشائعة.",
    video: "videos/comparatives.mp4"
  },

  // This is course number 6.
  {
    title: "Superlatives",
    description:
      "تعلم صيغة التفضيل وكيفية اختيار الإجابة الصحيحة بسرعة.",
    video: "videos/superlatives.mp4"
  },

  // This is course number 7.
  {
    title: "Modal Verbs",
    description:
      "شرح الأفعال الناقصة مثل can و should و must بطريقة مناسبة لاختبار STEP.",
    video: "videos/modal-verbs.mp4"
  },

  // This is course number 8.
  {
    title: "Vocabulary",
    description:
      "طريقة التعامل مع أسئلة المفردات والمرادفات واختيار الكلمة الأقرب في المعنى.",
    video: "videos/vocabulary.mp4"
  },

  // This is course number 9.
  {
    title: "Reading Skills",
    description:
      "استراتيجيات القراءة والبحث عن الكلمات المفتاحية للوصول إلى الإجابة بسرعة.",
    video: "videos/reading-skills.mp4"
  },

  // This is course number 10.
  {
    title: "Listening Skills",
    description:
      "استراتيجيات مهمة لفهم المقاطع الصوتية والتركيز على المعلومات التي تقود للإجابة.",
    video: "videos/listening-skills.mp4"
  }
];


// ============================================================
// GET HTML ELEMENTS
// ============================================================

// This gets the password screen from the HTML.
const accessScreen = document.getElementById("accessScreen");

// This gets the main website.
const mainWebsite = document.getElementById("mainWebsite");

// This gets the password input.
const passwordInput = document.getElementById("passwordInput");

// This gets the consent checkbox.
const consentCheck = document.getElementById("consentCheck");

// This gets the continue button.
const continueBtn = document.getElementById("continueBtn");

// This gets the error message area.
const accessError = document.getElementById("accessError");

// This gets the light-mode button.
const lightBtn = document.getElementById("lightBtn");

// This gets the dark-mode button.
const darkBtn = document.getElementById("darkBtn");

// This gets the course grid.
const courseGrid = document.getElementById("courseGrid");

// This gets the course count.
const courseCount = document.getElementById("courseCount");

// This gets the course modal.
const courseModal = document.getElementById("courseModal");

// This gets the close button.
const closeModalBtn = document.getElementById("closeModalBtn");

// This gets the title inside the video player.
const modalTitle = document.getElementById("modalTitle");

// This gets the lesson title below the video.
const lessonTitle = document.getElementById("lessonTitle");

// This gets the lesson description.
const lessonDescription = document.getElementById("lessonDescription");

// This gets the previous button.
const previousBtn = document.getElementById("previousBtn");

// This gets the next button.
const nextBtn = document.getElementById("nextBtn");

// This gets the HTML video element.
const courseVideo = document.getElementById("courseVideo");

// This gets the video placeholder.
const videoPlaceholder = document.getElementById("videoPlaceholder");

// This gets the play button.
const playBtn = document.getElementById("playBtn");

// This gets the progress bar.
const progressBar = document.getElementById("progressBar");

// This gets the current-time text.
const currentTime = document.getElementById("currentTime");

// This gets the duration text.
const durationTime = document.getElementById("durationTime");

// This gets the volume slider.
const volumeBar = document.getElementById("volumeBar");

// This gets the playback-speed selector.
const speedSelect = document.getElementById("speedSelect");

// This gets the fullscreen button.
const fullscreenBtn = document.getElementById("fullscreenBtn");


// This stores the number of the currently opened course.
// JavaScript starts counting arrays from 0.
let currentCourseIndex = 0;


// ============================================================
// CREATE COURSE CARDS
// ============================================================

// This function creates all course cards on the page.
function renderCourses() {

  // This clears the course grid before adding the cards.
  courseGrid.innerHTML = "";

  // This automatically displays the number of courses.
  courseCount.textContent = `${COURSES.length} الدروس`;

  // This loops through every course in the COURSES array.
  COURSES.forEach((course, index) => {

    // This creates a new HTML article element.
    const card = document.createElement("article");

    // This gives the article the CSS class "course-card".
    card.className = "course-card";

    // This creates the inside of the course card.
    card.innerHTML = `
      <div class="course-number">
        ${String(index + 1).padStart(2, "0")}
      </div>

      <h4>${course.title}</h4>

      <p>${course.description}</p>

      <button
        class="course-btn"
        data-index="${index}"
      >
        مشاهدة الدرس
      </button>
    `;

    // This adds the course card to the page.
    courseGrid.appendChild(card);
  });


  // This finds all buttons inside the course cards.
  document.querySelectorAll(".course-btn").forEach((button) => {

    // This listens for a click on each course button.
    button.addEventListener("click", () => {

      // This gets the course number stored in data-index.
      const index = Number(button.dataset.index);

      // This opens the selected course.
      openCourse(index);
    });
  });
}


// ============================================================
// OPEN COURSE
// ============================================================

// This function opens a course inside the video modal.
function openCourse(index) {

  // This remembers which course is currently open.
  currentCourseIndex = index;

  // This gets the selected course from the COURSES array.
  const course = COURSES[currentCourseIndex];

  // This changes the title at the top of the video player.
  modalTitle.textContent = course.title;

  // This changes the lesson title below the video.
  lessonTitle.textContent = course.title;

  // This changes the lesson description.
  lessonDescription.textContent = course.description;

  // This stops any previous video.
  courseVideo.pause();

  // This tells the video player which video to load.
  courseVideo.src = course.video;

  // This reloads the video.
  courseVideo.load();

  // This shows the placeholder until the video successfully loads.
  videoPlaceholder.classList.remove("hidden");

  // This tells the browser to hide the placeholder when the video loads.
  courseVideo.addEventListener(
    "loadedmetadata",
    hideVideoPlaceholder,
    { once: true }
  );

  // This keeps the placeholder visible if the video fails.
  courseVideo.addEventListener(
    "error",
    showVideoPlaceholder,
    { once: true }
  );

  // This shows the modal.
  courseModal.classList.remove("hidden");

  // This prevents the background website from scrolling.
  document.body.style.overflow = "hidden";

  // This updates the Previous and Next buttons.
  updateNavigationButtons();
}


// ============================================================
// VIDEO PLACEHOLDER
// ============================================================

// This function hides the video placeholder.
function hideVideoPlaceholder() {

  // This adds the hidden class.
  videoPlaceholder.classList.add("hidden");
}


// This function shows the video placeholder.
function showVideoPlaceholder() {

  // This removes the hidden class.
  videoPlaceholder.classList.remove("hidden");
}


// ============================================================
// PREVIOUS / NEXT BUTTONS
// ============================================================

// This function controls the previous and next buttons.
function updateNavigationButtons() {

  // Disable Previous if we are on the first course.
  previousBtn.disabled = currentCourseIndex === 0;

  // Disable Next if we are on the final course.
  nextBtn.disabled =
    currentCourseIndex === COURSES.length - 1;

  // Make the Previous button visually lighter when disabled.
  previousBtn.style.opacity =
    previousBtn.disabled ? "0.45" : "1";

  // Make the Next button visually lighter when disabled.
  nextBtn.style.opacity =
    nextBtn.disabled ? "0.45" : "1";
}


// ============================================================
// CLOSE COURSE
// ============================================================

// This function closes the video modal.
function closeCourse() {

  // Stop the video.
  courseVideo.pause();

  // Hide the modal.
  courseModal.classList.add("hidden");

  // Allow the main website to scroll again.
  document.body.style.overflow = "";
}


// ============================================================
// FORMAT VIDEO TIME
// ============================================================

// This function converts seconds into MM:SS.
function formatTime(seconds) {

  // If the value is not a valid number, return 00:00.
  if (!Number.isFinite(seconds)) {
    return "00:00";
  }

  // Calculate the number of minutes.
  const minutes = Math.floor(seconds / 60);

  // Calculate the remaining seconds.
  const remainingSeconds = Math.floor(seconds % 60);

  // Return something like 02:35.
  return `${String(minutes).padStart(2, "0")}:${String(
    remainingSeconds
  ).padStart(2, "0")}`;
}


// ============================================================
// PASSWORD SYSTEM
// ============================================================

// This listens for a click on the login button.
continueBtn.addEventListener("click", () => {

  // Get whatever the user typed.
  const password = passwordInput.value;


  // Check that the password contains exactly four numbers.
  if (!/^\d{4}$/.test(password)) {

    // Show an error message.
    accessError.textContent =
      "الرجاء إدخال رمز مكوّن من 4 أرقام.";

    // Stop the function.
    return;
  }


  // Check whether the password is correct.
  if (password !== "1111") {

    // Show an incorrect-password message.
    accessError.textContent =
      "رمز الدخول غير صحيح.";

    // Stop the function.
    return;
  }


  // Check whether the student accepted the agreement.
  if (!consentCheck.checked) {

    // Show the consent error.
    accessError.textContent =
      "يجب الموافقة على التعهد قبل الدخول.";

    // Stop the function.
    return;
  }


  // Hide the password screen.
  accessScreen.classList.add("hidden");

  // Show the real website.
  mainWebsite.classList.remove("hidden");

  // Generate all course cards.
  renderCourses();
});


// ============================================================
// PASSWORD INPUT
// ============================================================

// This listens whenever the user types something.
passwordInput.addEventListener("input", () => {

  // Remove anything that isn't a number.
  passwordInput.value =
    passwordInput.value.replace(/\D/g, "");

  // Keep the input limited to four characters.
  passwordInput.value =
    passwordInput.value.slice(0, 4);
});


// ============================================================
// DARK MODE
// ============================================================

// This activates light mode.
lightBtn.addEventListener("click", () => {

  // Remove the dark class.
  document.body.classList.remove("dark");

  // Remember the user's choice.
  localStorage.setItem("theme", "light");
});


// This activates dark mode.
darkBtn.addEventListener("click", () => {

  // Add the dark class.
  document.body.classList.add("dark");

  // Remember the user's choice.
  localStorage.setItem("theme", "dark");
});


// ============================================================
// REMEMBER THEME
// ============================================================

// Check whether the user previously selected dark mode.
if (localStorage.getItem("theme") === "dark") {

  // Restore dark mode.
  document.body.classList.add("dark");
}


// ============================================================
// CLOSE MODAL
// ============================================================

// Close the modal using the X button.
closeModalBtn.addEventListener("click", closeCourse);


// Close the modal when clicking the dark area outside the player.
courseModal.addEventListener("click", (event) => {

  // Check whether the user clicked the overlay itself.
  if (event.target === courseModal) {

    // Close the course.
    closeCourse();
  }
});


// ============================================================
// ESCAPE KEY
// ============================================================

// Listen for keyboard presses.
document.addEventListener("keydown", (event) => {

  // Check if the Escape key was pressed.
  if (
    event.key === "Escape" &&
    !courseModal.classList.contains("hidden")
  ) {

    // Close the course.
    closeCourse();
  }
});


// ============================================================
// PLAY / PAUSE
// ============================================================

// Listen for clicks on the Play button.
playBtn.addEventListener("click", () => {

  // Check whether the video is currently paused.
  if (courseVideo.paused) {

    // Start the video.
    courseVideo.play();

  } else {

    // Pause the video.
    courseVideo.pause();
  }
});


// Change the button to Pause when the video starts.
courseVideo.addEventListener("play", () => {

  // Display the pause symbol.
  playBtn.textContent = "❚❚";
});


// Change the button back to Play when the video pauses.
courseVideo.addEventListener("pause", () => {

  // Display the play symbol.
  playBtn.textContent = "▶";
});


// ============================================================
// VIDEO PROGRESS
// ============================================================

// Listen for video progress.
courseVideo.addEventListener("timeupdate", () => {

  // Check that the video has a valid duration.
  if (courseVideo.duration) {

    // Calculate the progress percentage.
    progressBar.value =
      (courseVideo.currentTime / courseVideo.duration) * 100;

    // Display the current video time.
    currentTime.textContent =
      formatTime(courseVideo.currentTime);
  }
});


// When video information loads.
courseVideo.addEventListener("loadedmetadata", () => {

  // Display the total video duration.
  durationTime.textContent =
    formatTime(courseVideo.duration);

  // Reset the current time.
  currentTime.textContent = "00:00";

  // Reset the progress bar.
  progressBar.value = 0;
});


// ============================================================
// PROGRESS BAR
// ============================================================

// Listen when the user moves the progress bar.
progressBar.addEventListener("input", () => {

  // Make sure the video has a duration.
  if (courseVideo.duration) {

    // Convert the percentage into a video time.
    courseVideo.currentTime =
      (Number(progressBar.value) / 100) *
      courseVideo.duration;
  }
});


// ============================================================
// VOLUME
// ============================================================

// Listen for volume changes.
volumeBar.addEventListener("input", () => {

  // Change the video volume.
  courseVideo.volume =
    Number(volumeBar.value);
});


// ============================================================
// PLAYBACK SPEED
// ============================================================

// Listen when the user changes playback speed.
speedSelect.addEventListener("change", () => {

  // Change the video playback speed.
  courseVideo.playbackRate =
    Number(speedSelect.value);
});


// ============================================================
// FULLSCREEN
// ============================================================

// Listen for fullscreen button clicks.
fullscreenBtn.addEventListener("click", async () => {

  // Try to enter fullscreen safely.
  try {

    // Check whether the browser supports requestFullscreen.
    if (courseVideo.requestFullscreen) {

      // Enter fullscreen.
      await courseVideo.requestFullscreen();

    // Check for Safari's fullscreen method.
    } else if (courseVideo.webkitEnterFullscreen) {

      // Enter fullscreen on Safari.
      courseVideo.webkitEnterFullscreen();
    }

  } catch (error) {

    // Print an error in the browser console if fullscreen fails.
    console.log(
      "Fullscreen is not available.",
      error
    );
  }
});


// ============================================================
// PREVIOUS LESSON
// ============================================================

// Listen for the Previous button.
previousBtn.addEventListener("click", () => {

  // Make sure there is a previous course.
  if (currentCourseIndex > 0) {

    // Open the previous course.
    openCourse(currentCourseIndex - 1);
  }
});


// ============================================================
// NEXT LESSON
// ============================================================

// Listen for the Next button.
nextBtn.addEventListener("click", () => {

  // Make sure there is a next course.
  if (
    currentCourseIndex <
    COURSES.length - 1
  ) {

    // Open the next course.
    openCourse(currentCourseIndex + 1);
  }
});