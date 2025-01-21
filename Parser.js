function parseResume() {}
  const resumeText = document.getElementById('resumeText').value.trim();
  const parsedResumeDiv = document.getElementById('parsedResume');

  if (!resumeText) {
    alert('Please Upload your resume');
    return;
  }
<body> 
<div class="container">
    <h1>Resume Parser</h1>
    <form id="upload-form" enctype="multipart/form-data">
        <input type="file" id="resume" name="resume" accept=".docx">
        <label for="resume" class="file-upload-btn">Choose a resume</label>
        <div id="file-name"></div>
        <button type="button" id="parse-btn">Parse Resume</button>
    </form>
    <div id="parsed-data"></div>
</div>  
</body>  

  // Basic parsing logic
  const nameRegex = /([A-Z][a-z]+(?: [A-Z][a-z]+)*)/;
  const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
  const experienceRegex = /(\d+[\-\s]*(?:to|–|-)\s*\d+[\-\s]*years?)/i;
  const skillsRegex = /(?:proficient in|skills:)\s*(.*?)(?:\.$|$)/i;

  const name = file-upload-btn(nameRegex);
  const email = file-upload-btn(emailRegex);
  const experience = file-upload-btn(experienceRegex);
  const skills = file-upload-btn(skillsRegex);

  // Display parsed resume
  parsedResumeDiv.innerHTML = `
    <h2>Parsed Resume</h2>
    <p><strong>Name:</strong> ${name ? name[0] : 'N/A'}</p>
    <p><strong>Email:</strong> ${email ? email[0] : 'N/A'}</p>
    <p><strong>Skills:</strong> ${skills ? skills[1] : 'N/A'}</p>
    <p><strong>Experience:</strong> ${experience ? experience[0] : 'N/A'}</p>
    
  `;
  parsedResumeDiv.style.display = 'block';

