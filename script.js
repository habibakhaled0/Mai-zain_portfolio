
  // Nav scroll effect
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
    document.getElementById('backTop').classList.toggle('visible', window.scrollY > 400);
  });

  // Back to top
  document.getElementById('backTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Mobile menu
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });
  document.querySelectorAll('.mob-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });

  // Scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Animated skill bars
  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
          bar.style.width = bar.dataset.pct + '%';
        });
        barObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  const sg = document.querySelector('.skills-grid');
  if (sg) barObserver.observe(sg);

  // Project filter
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      document.querySelectorAll('.project-item').forEach(item => {
        item.classList.toggle('hidden', f !== 'all' && item.dataset.cat !== f);
      });
    });
  });

  // Contact form demo
  document.getElementById('formSubmit').addEventListener('click', () => {
    const name = document.getElementById('fname').value.trim();
    const email = document.getElementById('femail').value.trim();
    const msg = document.getElementById('fmsg').value.trim();
    if (!name || !email || !msg) { alert('Please fill in all fields.'); return; }
    document.getElementById('formSuccess').style.display = 'block';
    document.getElementById('fname').value = '';
    document.getElementById('femail').value = '';
    document.getElementById('fmsg').value = '';
    setTimeout(() => { document.getElementById('formSuccess').style.display = 'none'; }, 4000);
  });
