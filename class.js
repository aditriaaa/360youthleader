(function () {
  var tracks = {
    lead: {
      name: 'Leadership',
      topics: {
        'gita-warriors': ['Gita Warriors: Value-Based Leadership for Youth', 'Explore leadership through values such as integrity, responsibility, and service. Students connect ideas from the Gita to everyday choices and practice acting on what they believe is right.'],
        'leading-self-others': ['Leading Self & Others', 'Build self-awareness, accountability, and the practical skills to guide a group. Students learn that dependable leadership starts with managing their own choices and commitments.'],
        'purpose-vision-goal-setting': ['Purpose, Vision & Goal Setting', 'Identify personal strengths and values, imagine a meaningful direction, and turn that vision into achievable goals. Students practice breaking larger goals into concrete next steps.'],
        'decision-making': ['Decision Making', 'Practice weighing options, considering consequences, and using personal values to make thoughtful choices. Students learn a repeatable process they can use in everyday situations.'],
        'calm-under-pressure': ['Calm Under Pressure', 'Develop ways to pause, manage strong reactions, and think clearly when facing stress or a difficult moment. Students practice tools for responding deliberately instead of impulsively.'],
        'bouncing-back': ['Bouncing Back', 'Learn to treat setbacks as opportunities to reflect, adjust, and try again. Students build resilience by identifying what they can learn from mistakes and where to find support.'],
        'building-relationships': ['Building Relationships', 'Strengthen listening, empathy, trust, and respectful communication. Students explore how consistent actions help create healthy friendships and effective teams.'],
        'conflict-resolution': ['Conflict Resolution', 'Learn to understand different perspectives, communicate concerns respectfully, and work toward fair solutions. Students practice handling disagreements without escalating them.'],
        'time-management': ['Time Management', 'Plan tasks, set priorities, and make realistic schedules for school, activities, and rest. Students practice breaking projects into steps and following through on commitments.']
      }
    },
    mind: {
      name: 'Mastery of Mind, Body & Soul',
      topics: {
        'gita-warriors': ['Gita Warriors: Value-Based Leadership for Youth', 'Explore leadership through values such as integrity, responsibility, and service. Students connect ideas from the Gita to everyday choices and practice acting on what they believe is right.'],
        'mental-health': ['Mental Health', 'Build age-appropriate awareness of emotional well-being, common challenges, and healthy ways to seek support. Students learn that asking a trusted adult or professional for help is a strength.'],
        'empathy-emotional-intelligence': ['Empathy & Emotional Intelligence', 'Recognize emotions in themselves and others, listen with care, and respond thoughtfully. Students practice perspective-taking and communicating feelings respectfully.'],
        'growth-mindset': ['Growth Mindset', 'Explore how effort, feedback, and practice can help skills develop over time. Students learn to approach challenges with curiosity and use mistakes as information for their next attempt.'],
        'self-confidence': ['Self Confidence', 'Recognize personal strengths and build confidence through preparation, practice, and self-respect. Students learn to try new things without needing to be perfect.'],
        'tackling-stress': ['Tackling Stress', 'Notice signs of stress and practice healthy strategies such as planning, movement, breathing, and talking with a trusted person. Students create a personal toolkit for challenging days.'],
        'conquering-anger': ['Conquering Anger', 'Understand what can trigger anger and how it affects thoughts and actions. Students practice pausing, expressing frustration safely, and choosing a constructive response.'],
        'building-right-associations': ['Building the Right Associations', 'Reflect on how friends, mentors, and communities influence choices and well-being. Students practice recognizing supportive relationships and choosing company that reflects their values.'],
        'chess-critical-thinking': ['Chess & Critical Thinking', 'Use chess and other reasoning activities to practice planning ahead, recognizing patterns, and considering consequences. Students build patience by learning to evaluate several possible moves.'],
        'yoga': ['Yoga', 'Practice age-appropriate movement, breathing, balance, and focus. Students explore how a regular yoga routine can support flexibility and body awareness.'],
        'healthy-diet': ['Healthy Diet', 'Learn foundational nutrition concepts and how balanced food choices support energy and growth. Students practice making thoughtful everyday choices without labeling foods or bodies.']
      }
    },
    future: {
      name: 'Future Pathways',
      topics: {
        'college-counseling': ['College Counseling', 'Explore how to research colleges, compare options, and understand application timelines. Students learn to connect their interests and goals with a range of possible educational paths.'],
        'college-essays': ['College Essays', 'Develop ideas and drafts that communicate a student’s experiences, perspective, and growth. Students practice writing with specific details and revising in their own authentic voice.'],
        'architecting-resume': ['Architecting a Résumé', 'Create a clear résumé that presents activities, projects, skills, and experience. Students learn to describe their contributions honestly and tailor the document to an opportunity.'],
        'scholarships': ['Scholarships', 'Learn how to find scholarship opportunities, understand eligibility, and organize application materials. Students practice planning ahead and presenting their achievements and goals clearly.'],
        'internships-research': ['Internships / Research', 'Explore internships and research experiences that introduce students to real-world fields and questions. Students learn how to find opportunities, communicate professionally, and reflect on what they discover.'],
        'industry-volunteering': ['Industry Volunteering', 'Get exposure to different fields through supervised service and community opportunities. Students can learn about workplace settings while contributing their time and skills.'],
        'medical-cna': ['Medical Opportunity: CNA', 'Explore what certified nursing assistants do and the training and qualifications the role requires. Students learn about patient support and healthcare careers through age-appropriate, supervised exposure.'],
        'medical-assistant': ['Medical Opportunity: Medical Assistant', 'Learn about the varied administrative and clinical support duties of medical assistants. Students explore the training involved and healthcare career paths through supervised exposure.']
      }
    },
    voice: {
      name: 'Voice, Brand & Influence',
      topics: {
        'public-speaking': ['Public Speaking', 'Plan and deliver talks with a clear message, an organized structure, and an engaging presence. Students build confidence through practice and constructive feedback.'],
        'storytelling': ['Storytelling', 'Shape meaningful experiences into stories with a clear beginning, development, and conclusion. Students practice using detail, voice, and structure to connect with an audience.'],
        'persuasive-writing': ['Persuasive Writing', 'Build a clear claim, support it with relevant reasons and evidence, and address other viewpoints fairly. Students practice writing to inform and persuade with respect.'],
        'publishing-a-book': ['Publishing a Book', 'Explore how a written idea moves from planning and drafting through editing and publication. Students learn about revision, audience, and the many formats for sharing original work.'],
        'personal-brand': ['Personal Brand', 'Reflect on how values, actions, communication, and online presence shape how others understand you. Students learn to present themselves consistently and authentically.'],
        'mentorship': ['Mentorship', 'Learn how mentors can offer guidance and how students can build respectful, purposeful mentoring relationships. Students also practice sharing what they know to support others.']
      }
    },
    money: {
      name: 'Money Smarts',
      topics: {
        'personal-finance-investing': ['Personal Finance / Investing', 'Learn foundational ideas about budgeting, saving, banking, and how investing works over time. Students practice asking informed questions and making age-appropriate financial decisions with trusted adult guidance.'],
        'entrepreneurship': ['Entrepreneurship', 'Explore how people identify a need, develop an idea, and build a simple plan for a product or service. Students practice creative problem-solving and learn the basics of costs, customers, and value.'],
        'side-hustle': ['Side Hustle', 'Consider age-appropriate ways to earn money by offering a useful service or making something. Students learn to plan their time, understand basic costs, and follow relevant family and local rules.'],
        'home-economics': ['Home Economics', 'Practice practical skills for everyday independence, such as meal planning, cooking basics, and household budgeting. Students learn how small choices can support a well-run home.']
      }
    },
    community: {
      name: 'Community & Character',
      topics: {
        'meaningful-volunteering-seva': ['Giving Back through Meaningful Volunteering (Seva)', 'Explore seva, or selfless service, by identifying community needs and contributing time and care. Students learn to choose meaningful projects and reflect on the impact of their efforts.'],
        'civic-sense-etiquette': ['Civic Sense & Etiquette', 'Practice respect, consideration, and responsibility in shared spaces and community life. Students learn everyday habits that help people cooperate and feel welcome.'],
        'service-awards': ['Service Awards', 'Learn how sustained volunteering can be documented and recognized. Students set service goals, track their contributions, and reflect on the value of showing up consistently.']
      }
    },
    safety: {
      name: 'Safety & Self Defense',
      topics: {
        'self-defense': ['Self Defense', 'Build awareness, boundary-setting, and age-appropriate strategies for seeking help and moving toward safety. Any physical skills should be taught by qualified instructors in a supervised setting.'],
        'cpr-first-aid': ['CPR & First Aid', 'Learn why quick, informed action matters in an emergency and explore basic first-aid and CPR concepts. Hands-on practice and certification should be provided by a qualified training organization.'],
        'digital-safety': ['Digital Safety', 'Practice protecting personal information, recognizing suspicious messages, and responding to cyberbullying or unsafe online contact. Students learn when and how to involve a trusted adult.']
      }
    }
  };

  var params = new URLSearchParams(window.location.search);
  var track = tracks[params.get('track')];
  var topic = track && track.topics[params.get('topic')];
  var title = document.getElementById('class-title');
  var description = document.getElementById('class-description');
  var trackLabel = document.getElementById('class-track');
  var back = document.getElementById('track-back');

  if (!track || !topic) {
    title.textContent = 'Class not found';
    description.textContent = 'This class could not be found. Browse the tracks to see all available classes.';
    trackLabel.textContent = '';
    return;
  }

  document.title = topic[0] + ' | The 360° Youth Leader';
  title.textContent = topic[0];
  description.textContent = topic[1];
  trackLabel.textContent = track.name;
  back.href = params.get('track') + '.html';
  back.textContent = 'Back to ' + track.name;
})();