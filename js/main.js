/**
 * EDISH CONNECT — HUMAN-CRAFTED CLIENT APPLICATION ENGINE
 * Clean, lightweight, accessible JavaScript interactions.
 * Built for clarity, speed, and real enterprise utility.
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileNavigation();
  initStaircaseJourney();
  initCostCalculator();
  initFaqAccordion();
  initStrategyModal();
  initInquiryForms();
});

/* ===================================================================
   1. STICKY HEADER & SCROLL BEHAVIOR
   =================================================================== */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* ===================================================================
   2. MOBILE NAVIGATION DRAWER
   =================================================================== */
function initMobileNavigation() {
  const toggleBtn = document.getElementById('mobileToggle');
  const drawer = document.getElementById('mobileDrawer');
  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = drawer.classList.toggle('is-open');
    toggleBtn.setAttribute('aria-expanded', isOpen);
  });

  // Close drawer when clicking any link
  const drawerLinks = drawer.querySelectorAll('a');
  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('is-open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!drawer.contains(e.target) && !toggleBtn.contains(e.target)) {
      drawer.classList.remove('is-open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

/* ===================================================================
   3. THE STAIRCASE PROGRESSIVE JOURNEY (Interactive Tabs)
   =================================================================== */
const staircaseStages = [
  {
    badge: 'Step 01 • Scoped Proof of Fit',
    title: 'Validate Delivery with an Autonomous Agile Pod',
    description: 'The lowest-friction starting point. A dedicated pod of 3 to 8 senior engineers working on your backlog under your sprint cadence. Zero foreign legal entity overhead, immediate velocity.',
    specs: [
      { label: 'Recommended Team Size', value: '3 to 8 Engineers' },
      { label: 'Time to Kickoff', value: '14 Business Days' },
      { label: 'Governance Cadence', value: 'Direct Slack, Jira & Daily Standup' },
      { label: 'Balance Sheet Commitment', value: 'Zero Entity Setup Required' }
    ],
    photo: 'assets/images/engineering_pod_collaboration.jpg',
    captionTag: 'Rapid Backlog Acceleration',
    captionTitle: 'High-Velocity Scoped Engineering Pod'
  },
  {
    badge: 'Step 02 • Dedicated Center',
    title: 'Scale Velocity in a Branded Offshore Development Center',
    description: 'A custom, dedicated engineering facility in Jaipur built around your technical standards. Edish provides Tier-4 physical infrastructure, HR, and regulatory shielding while you maintain direct architectural command.',
    specs: [
      { label: 'Recommended Team Size', value: '10 to 40 Engineers' },
      { label: 'Time to Full Ramp', value: '4 to 6 Weeks' },
      { label: 'Facility Structure', value: 'Branded Dedicated Office Wing' },
      { label: 'IP Assignment', value: '100% Direct Corporate Ring-Fence' }
    ],
    photo: 'assets/images/modern_tech_center.jpg',
    captionTag: 'Dedicated Physical Wing',
    captionTitle: 'Enterprise ODC Infrastructure in Jaipur'
  },
  {
    badge: 'Step 03 • De-Risked Ownership',
    title: 'Incubate Your Permanent Capability via Build-Operate-Transfer',
    description: 'Edish absorbs all initial operational, compliance, and hiring risks during the build phase. Once team maturity and cultural integration reach institutional stability, we transfer 100% of the entity and assets to you at a pre-agreed formula.',
    specs: [
      { label: 'Recommended Team Size', value: '30 to 80+ Specialists' },
      { label: 'Transfer Window', value: '18 to 36 Months' },
      { label: 'Valuation & Buyout', value: 'Pre-Defined Transparent Multiple' },
      { label: 'Talent Continuity Guarantee', value: 'Zero Disruption Employee Transfer' }
    ],
    photo: 'assets/images/executive_boardroom_gcc.jpg',
    captionTag: 'Seamless Corporate Transfer',
    captionTitle: 'Structured BOT Transition to Client Balance Sheet'
  },
  {
    badge: 'Step 04 • Sovereign Institution',
    title: 'Establish a Wholly-Owned Indian Subsidiary (Sovereign GCC)',
    description: 'For global enterprises ready for an independent corporate asset. Turnkey advisory, campus buildout, tax structuring, and executive recruitment for a permanent capability hub in Jaipur.',
    specs: [
      { label: 'Recommended Team Size', value: '75 to 250+ Engineers' },
      { label: 'Corporate Entity', value: '100% Client-Owned Private Limited' },
      { label: 'Functional Scope', value: 'Core R&D, Platform AI, Global Operations' },
      { label: 'Financial Impact', value: 'Long-Term Enterprise Valuation Asset' }
    ],
    photo: 'assets/images/enterprise_capability_campus.jpg',
    captionTag: 'Long-Term Sovereign Campus',
    captionTitle: 'Tier-2 Flagship Capability Center in Jaipur'
  }
];

// Ownership percentage per stage (ascending control)
const stageOwnership = [40, 60, 85, 100];

function initStaircaseJourney() {
  const stepEls = document.querySelectorAll('.v-stair-step');
  const badgeEl = document.getElementById('stairBadge');
  const titleEl = document.getElementById('stairTitle');
  const descEl = document.getElementById('stairDesc');
  const specsGridEl = document.getElementById('stairSpecs');
  const photoEl = document.getElementById('stairPhoto');
  const captionTagEl = document.getElementById('stairCaptionTag');
  const captionTitleEl = document.getElementById('stairCaptionTitle');
  const gaugeValueEl = document.getElementById('gaugeValue');
  const gaugeFillEl = document.getElementById('gaugeFill');

  if (!stepEls.length || !titleEl) return;

  function renderStage(index) {
    const stage = staircaseStages[index];
    if (!stage) return;

    // Update active visual step
    stepEls.forEach((el, idx) => {
      el.classList.toggle('active', idx === index);
      el.setAttribute('aria-selected', idx === index);
    });

    if (badgeEl) badgeEl.textContent = stage.badge;
    if (titleEl) titleEl.textContent = stage.title;
    if (descEl) descEl.textContent = stage.description;

    if (specsGridEl) {
      specsGridEl.innerHTML = stage.specs.map(spec => `
        <div class="spec-matrix-item">
          <strong>${spec.label}</strong>
          <span>${spec.value}</span>
        </div>
      `).join('');
    }

    if (photoEl) {
      photoEl.src = stage.photo;
      photoEl.alt = stage.captionTitle;
    }
    if (captionTagEl) captionTagEl.textContent = stage.captionTag;
    if (captionTitleEl) captionTitleEl.textContent = stage.captionTitle;

    // Animate ownership gauge
    const ownership = stageOwnership[index] || 40;
    if (gaugeValueEl) gaugeValueEl.textContent = ownership + '%';
    if (gaugeFillEl) gaugeFillEl.style.width = ownership + '%';
  }

  stepEls.forEach((el, index) => {
    el.addEventListener('click', () => {
      renderStage(index);
    });
  });

  // Render initial step
  renderStage(0);
}

/* ===================================================================
   4. INTERACTIVE COST & SAVINGS ESTIMATOR (Clean & Practical)
   =================================================================== */
function initCostCalculator() {
  const teamSlider = document.getElementById('calcTeamSize');
  const teamValEl = document.getElementById('calcTeamVal');
  const seniorityRadios = document.querySelectorAll('input[name="calcSeniority"]');
  const modelRadios = document.querySelectorAll('input[name="calcModel"]');

  const recModelNameEl = document.getElementById('recModelName');
  const recModelDescEl = document.getElementById('recModelDesc');
  const monthlyCostEl = document.getElementById('recMonthlyCost');
  const annualSavingsEl = document.getElementById('recAnnualSavings');
  const timelineEl = document.getElementById('recTimeline');

  if (!teamSlider) return;

  // Average monthly rates per engineer (Jaipur hub vs US/EU in-house cost including taxes, benefits, overhead)
  const rateBenchmarks = {
    mid: { jaipur: 3200, western: 11000 },
    senior: { jaipur: 4600, western: 15500 },
    lead: { jaipur: 6200, western: 20500 }
  };

  function updateEstimator() {
    const headcount = parseInt(teamSlider.value, 10);
    if (teamValEl) {
      teamValEl.textContent = `${headcount} Engineer${headcount > 1 ? 's' : ''}`;
    }

    // Seniority selection
    let seniority = 'senior';
    seniorityRadios.forEach(radio => {
      if (radio.checked) seniority = radio.value;
    });

    // Model selection
    let model = 'bot';
    modelRadios.forEach(radio => {
      if (radio.checked) model = radio.value;
    });

    // Calculate financials
    const rates = rateBenchmarks[seniority] || rateBenchmarks.senior;
    const monthlyJaipur = headcount * rates.jaipur;
    const monthlyWestern = headcount * rates.western;
    const monthlySaved = monthlyWestern - monthlyJaipur;
    const annualSaved = monthlySaved * 12;

    if (monthlyCostEl) {
      monthlyCostEl.textContent = `$${Math.round(monthlyJaipur).toLocaleString()}/mo`;
    }

    if (annualSavingsEl) {
      annualSavingsEl.textContent = `$${Math.round(annualSaved).toLocaleString()}/yr`;
    }

    // Determine smart recommendations
    if (headcount <= 8) {
      if (recModelNameEl) recModelNameEl.textContent = 'Dedicated Engineering Pod';
      if (recModelDescEl) recModelDescEl.textContent = `A cohort of ${headcount} engineers is ideal for a scoped pod. Zero overhead, rapid 14-day kickoff, embedded directly in your daily sprints.`;
      if (timelineEl) timelineEl.textContent = '10–14 Days';
    } else if (headcount <= 35) {
      if (recModelNameEl) recModelNameEl.textContent = 'Dedicated ODC Center';
      if (recModelDescEl) recModelDescEl.textContent = `For ${headcount} specialists, a dedicated ODC in Jaipur offers maximum cost efficiency without the friction of establishing a foreign legal entity.`;
      if (timelineEl) timelineEl.textContent = '3–5 Weeks';
    } else {
      if (recModelNameEl) recModelNameEl.textContent = 'Build-Operate-Transfer (BOT)';
      if (recModelDescEl) recModelDescEl.textContent = `A scale of ${headcount} engineers creates substantial balance sheet value. We incubate the operations, with 100% corporate equity transferred to you in 18–24 months.`;
      if (timelineEl) timelineEl.textContent = '6–8 Weeks';
    }
  }

  teamSlider.addEventListener('input', updateEstimator);
  seniorityRadios.forEach(r => r.addEventListener('change', updateEstimator));
  modelRadios.forEach(r => r.addEventListener('change', updateEstimator));

  // Initialize calculation
  updateEstimator();
}

/* ===================================================================
   5. FREQUENTLY ASKED QUESTIONS (Accordion)
   =================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      // Close all other items for clean accordion behavior
      faqItems.forEach(other => {
        if (other !== item) {
          other.classList.remove('is-open');
          const otherBtn = other.querySelector('.faq-question');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle current item
      item.classList.toggle('is-open', !isOpen);
      questionBtn.setAttribute('aria-expanded', String(!isOpen));
    });
  });
}

/* ===================================================================
   6. STRATEGY BRIEFING MODAL
   =================================================================== */
function initStrategyModal() {
  const modal = document.getElementById('proposalModal');
  const closeBtn = document.getElementById('closeModalBtn');
  const openBtns = document.querySelectorAll('[data-open-modal]');
  const modalScopeSelect = document.getElementById('mScope');

  if (!modal) return;

  function openModal(preferredModel = '') {
    modal.classList.add('is-active');
    document.body.style.overflow = 'hidden';

    if (preferredModel && modalScopeSelect) {
      modalScopeSelect.value = preferredModel;
    }
  }

  function closeModal() {
    modal.classList.remove('is-active');
    document.body.style.overflow = '';
  }

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const modelTarget = btn.getAttribute('data-model') || '';
      openModal(modelTarget);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  // Click outside to close
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Escape key to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-active')) {
      closeModal();
    }
  });
}

/* ===================================================================
   7. INQUIRY FORMS & USER FEEDBACK
   =================================================================== */
function initInquiryForms() {
  const forms = document.querySelectorAll('.executive-inquiry-form');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : '';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>Transmitting Request...</span>';
      }

      // Simulate clean business handling
      setTimeout(() => {
        if (submitBtn) {
          submitBtn.innerHTML = '<span>Request Received ✓</span>';
          submitBtn.style.backgroundColor = '#059669';
        }

        // Show success notification if present
        const successBanner = form.querySelector('.form-success-banner');
        if (successBanner) {
          successBanner.classList.add('is-visible');
        } else {
          alert('Thank you for contacting Edish Connect. Our Founding Executive Desk in Jaipur will review your scope and follow up directly within 24 business hours.');
        }

        form.reset();

        setTimeout(() => {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
            submitBtn.style.backgroundColor = '';
          }
        }, 4000);
      }, 700);
    });
  });
}
