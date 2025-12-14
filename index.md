---
layout: default
---

<section class="hero" id="home">

  <!-- MAIN HERO CONTENT (TEXT + IMAGE) -->
  <div class="hero-content">
    <div class="hero-text">
      <h1>Your Name Here</h1>
      <p>
        Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <a href="#projects" class="btn">Let's get started →</a>
    </div>

    <div class="hero-img">
      <img src="{{ '/assets/images/image.jpg' | relative_url }}" alt="Profile">
    </div>
  </div>

  <!-- WORKED WITH (SEPARATE ROW, NO COLLISION) -->
  <div class="worked-with">
    <span class="worked-title">Worked with</span>

    <div class="company-logos">
      <div class="company-box">
        <img src="{{ '/assets/images/companies/anker.png' | relative_url }}" alt="Anker">
      </div>

      <div class="company-box">
        <img src="{{ '/assets/images/companies/xiaomi.png' | relative_url }}" alt="Xiaomi">
      </div>

      <div class="company-box">
        <img src="{{ '/assets/images/companies/milkbymom.webp' | relative_url }}" alt="Milk by Mom">
      </div>

      <div class="company-box">
        <img src="{{ '/assets/images/companies/telenor.png' | relative_url }}" alt="Telenor">
      </div>

      <div class="company-box">
        <img src="{{ '/assets/images/companies/zhiyun.webp' | relative_url }}" alt="Zhiyun">
      </div>
    </div>
  </div>

</section>

<section class="projects" id="projects">
  <h2>Projects</h2>

  <div class="project-card">
    <div class="project-text">
      <h3>Project Name</h3>
      <p>
        I created this personal project to show how to create an interface
        in Figma using a portfolio as an example.
      </p>
      <button class="outline-btn">View Project</button>
    </div>
    <img src="{{ '/assets/images/image.jpg' | relative_url }}">
  </div>

  <div class="project-card reverse">
    <img src="{{ '/assets/images/image.jpg' | relative_url }}">
    <div class="project-text">
      <h3>Project Name</h3>
      <p>
        What was your role, your deliverables, if the project was personal
        or freelancing.
      </p>
      <button class="outline-btn">View Project</button>
    </div>
  </div>

  <div class="project-card">
    <div class="project-text">
      <h3>Project Name</h3>
      <p>
        You can also add in this description the type of the project.
      </p>
      <button class="outline-btn">View Project</button>
    </div>
    <img src="{{ '/assets/images/image.jpg' | relative_url }}">
  </div>
</section>

