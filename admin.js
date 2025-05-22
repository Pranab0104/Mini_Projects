gsap.registerPlugin(ScrollTrigger);

gsap.from("table", {
  y: 100,
  opacity: 0,
  duration: 1.5,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "table",
    start: "top 80%",
  },
});

// Dummy loan application data (replace with actual data source/backend)
const loanApplications = [
  {
    id: 'LOAN1001',
    name: 'John Doe',
    email: 'john@example.com',
    amount: 50000,
    purpose: 'Personal',
    duration: 24,
    status: 'Approved',
  },
  {
    id: 'LOAN1002',
    name: 'Jane Smith',
    email: 'jane@example.com',
    amount: 120000,
    purpose: 'Business',
    duration: 36,
    status: 'Pending',
  },
  {
    id: 'LOAN1003',
    name: 'Raj Patel',
    email: 'raj@example.com',
    amount: 75000,
    purpose: 'Education',
    duration: 12,
    status: 'Rejected',
  },
];

// Render the table rows dynamically
const tbody = document.querySelector('#applications-table tbody');
loanApplications.forEach(app => {
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${app.id}</td>
    <td>${app.name}</td>
    <td>${app.email}</td>
    <td>₹${app.amount.toLocaleString()}</td>
    <td>${app.purpose}</td>
    <td>${app.duration}</td>
    <td>${app.status}</td>
  `;
  tbody.appendChild(tr);
});
