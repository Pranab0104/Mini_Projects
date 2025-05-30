gsap.registerPlugin(ScrollTrigger);

gsap.from(".status-form", {
  y: 100,
  opacity: 0,
  duration: 1.5,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".status-form",
    start: "top 80%",
  },
});

// Dummy data for demo purposes (replace with real API/backend later)
const dummyStatusData = {
  'LOAN1234': 'Approved',
  'LOAN5678': 'Pending',
  'LOAN9012': 'Rejected',
};

document.getElementById('status-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const appId = document.getElementById('appId').value.trim().toUpperCase();
  const resultDiv = document.getElementById('status-result');

  if (appId === '') {
    resultDiv.textContent = 'Please enter an Application ID.';
    return;
  }

  if (dummyStatusData[appId]) {
    resultDiv.textContent = `Application Status: ${dummyStatusData[appId]}`;
  } else {
    resultDiv.textContent = 'Application ID not found. Please check and try again.';
  }
});
