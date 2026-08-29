// Pythagorean Numerology System Engine

const PYTHAGOREAN_MAP = {
  A: 1, J: 1, S: 1,
  B: 2, K: 2, T: 2,
  C: 3, L: 3, U: 3,
  D: 4, M: 4, V: 4,
  E: 5, N: 5, W: 5,
  F: 6, O: 6, X: 6,
  G: 7, P: 7, Y: 7,
  H: 8, Q: 8, Z: 8,
  I: 9, R: 9
};

const VOWELS = new Set(['A', 'E', 'I', 'O', 'U']);

// Helper to reduce number to single digit unless it's a Master Number (11, 22, 33)
export function reduceNumber(num, preserveMaster = true) {
  if (preserveMaster && (num === 11 || num === 22 || num === 33)) {
    return num;
  }
  let current = num;
  while (current > 9) {
    if (preserveMaster && (current === 11 || current === 22 || current === 33)) {
      return current;
    }
    current = String(current)
      .split('')
      .reduce((acc, digit) => acc + parseInt(digit, 10), 0);
  }
  return current;
}

// Calculate Life Path Number from YYYY-MM-DD
export function calculateLifePath(dobString) {
  if (!dobString) return null;
  const parts = dobString.split('-');
  if (parts.length !== 3) return null;

  const yearSum = reduceNumber(parts[0].split('').reduce((a, b) => a + parseInt(b, 10), 0));
  const monthSum = reduceNumber(parseInt(parts[1], 10));
  const daySum = reduceNumber(parseInt(parts[2], 10));

  const total = yearSum + monthSum + daySum;
  return reduceNumber(total);
}

// Calculate Expression/Destiny Number from Full Name
export function calculateExpression(fullName) {
  if (!fullName) return null;
  const cleanName = fullName.toUpperCase().replace(/[^A-Z]/g, '');
  let sum = 0;
  for (let char of cleanName) {
    sum += PYTHAGOREAN_MAP[char] || 0;
  }
  return reduceNumber(sum);
}

// Calculate Soul Urge Number (Vowels only)
export function calculateSoulUrge(fullName) {
  if (!fullName) return null;
  const cleanName = fullName.toUpperCase().replace(/[^A-Z]/g, '');
  let sum = 0;
  for (let char of cleanName) {
    if (VOWELS.has(char)) {
      sum += PYTHAGOREAN_MAP[char] || 0;
    }
  }
  return reduceNumber(sum);
}

// Calculate Personality Number (Consonants only)
export function calculatePersonality(fullName) {
  if (!fullName) return null;
  const cleanName = fullName.toUpperCase().replace(/[^A-Z]/g, '');
  let sum = 0;
  for (let char of cleanName) {
    if (!VOWELS.has(char)) {
      sum += PYTHAGOREAN_MAP[char] || 0;
    }
  }
  return reduceNumber(sum);
}

// Detailed interpretations library
export const NUMBER_INTERPRETATIONS = {
  1: {
    title: "The Pioneer & Visionary Leader",
    rulingPlanet: "Sun ☀️",
    archetype: "Original Thinker, Trailblazer, Independent Strategist",
    summary: "Number 1 embodies pure creative energy, initiative, and unmatched drive. You are destined to lead, innovate, and carve out your own unique path in life and business.",
    strengths: ["Bold leadership", "Self-reliance", "Creative ingenuity", "Determined focus"],
    challenges: ["Impatience with others", "Ego resistance", "Difficulty delegating"],
    careerPath: "Entrepreneur, Executive, Creative Director, Founder, Independent Consultant",
    relationshipInsight: "Seeks a partner who respects their autonomy while providing grounded warmth.",
    luckyColors: ["Royal Gold", "Warm Amber", "Crimson"],
    luckyDays: ["Sunday", "Monday"],
    compatibleNumbers: [1, 3, 5, 7]
  },
  2: {
    title: "The Master Diplomat & Peacemaker",
    rulingPlanet: "Moon 🌙",
    archetype: "Intuitive Healer, Harmonizer, Empathetic Partner",
    summary: "Number 2 is the vibration of harmony, deep intuition, and cooperation. You excel at sensing hidden emotions, bringing people together, and creating elegant balance.",
    strengths: ["High emotional intelligence", "Tact & grace", "Intuitive foresight", "Deep empathy"],
    challenges: ["Over-sensitivity", "Avoiding healthy confrontation", "Self-doubt"],
    careerPath: "Relationship Coach, Counselor, Mediator, HR Executive, Diplomat, Designer",
    relationshipInsight: "Thrives in deep, soul-aligned partnerships built on mutual loyalty and open trust.",
    luckyColors: ["Pearl White", "Soft Silver", "Beige"],
    luckyDays: ["Monday", "Friday"],
    compatibleNumbers: [2, 4, 6, 8]
  },
  3: {
    title: "The Master Communicator & Creator",
    rulingPlanet: "Jupiter 🪐",
    archetype: "Storyteller, Expressive Artist, Charismatic Catalyst",
    summary: "Number 3 represents radiant self-expression, joyful creativity, and magnetic charisma. Your words and enthusiasm have the power to uplift and transform those around you.",
    strengths: ["Eloquence", "Artistic vision", "Infectious optimism", "Social magnetism"],
    challenges: ["Scattered focus", "Superficial detachment", "Mood fluctuations"],
    careerPath: "Author, Public Speaker, Media Personality, Marketing Maestro, Performing Artist",
    relationshipInsight: "Needs an intellectual companion who appreciates spontaneous laughter and artistic passions.",
    luckyColors: ["Bright Gold", "Canary Yellow", "Saffron"],
    luckyDays: ["Thursday", "Tuesday"],
    compatibleNumbers: [1, 3, 5, 9]
  },
  4: {
    title: "The Master Architect & Builder",
    rulingPlanet: "Rahu / Uranus ⚡",
    archetype: "Grounded Strategist, System Builder, Pillar of Trust",
    summary: "Number 4 stands for stability, discipline, and practical execution. You turn abstract ideas into enduring real-world success through meticulous detail and high integrity.",
    strengths: ["Unwavering work ethic", "Systematic planning", "Dependability", "Practical wisdom"],
    challenges: ["Rigidity to change", "Overworking", "Excessive caution"],
    careerPath: "Civil Architect, Financial Strategist, Operations Lead, Project Manager, Corporate Lawyer",
    relationshipInsight: "Values stability, loyalty, and long-term commitment above fleeting romance.",
    luckyColors: ["Emerald Green", "Earth Brown", "Matte Grey"],
    luckyDays: ["Saturday", "Sunday"],
    compatibleNumbers: [2, 4, 7, 8]
  },
  5: {
    title: "The Freedom Seeker & Transformational Agent",
    rulingPlanet: "Mercury ☿",
    archetype: "Adventurer, Change Catalyst, Versatile Innovator",
    summary: "Number 5 is the energy of dynamic freedom, curiosity, and rapid transformation. You thrive on new experiences, adaptable strategies, and global perspective.",
    strengths: ["Adaptability", "Charismatic communication", "Quick learning curve", "Fearless vision"],
    challenges: ["Restlessness", "Impulsiveness", "Loss of routine"],
    careerPath: "Global Consultant, Travel Journalist, Event Curator, Tech Innovator, Publicist",
    relationshipInsight: "Requires an open-minded partner who shares excitement for exploration and personal freedom.",
    luckyColors: ["Electric Blue", "Turquoise", "Platinum White"],
    luckyDays: ["Wednesday", "Friday"],
    compatibleNumbers: [1, 3, 5, 9]
  },
  6: {
    title: "The Radiant Nurturer & Aesthetic Guardian",
    rulingPlanet: "Venus ♀",
    archetype: "Family Pillar, Creative Designer, Compassionate Leader",
    summary: "Number 6 embodies unconditional love, aesthetic elegance, and harmony. You possess a natural gift for beautifying environments and nurturing meaningful human bonds.",
    strengths: ["Unconditional empathy", "Design sense", "Responsibility", "Harmonious instinct"],
    challenges: ["Over-protectiveness", "Self-sacrifice", "Perfectionism"],
    careerPath: "Interior Architect, Family Counselor, Luxury Brand Director, Wellness Expert, Educator",
    relationshipInsight: "Devoted, loving, and deeply protective of family and sacred space.",
    luckyColors: ["Rose Gold", "Ivory White", "Pastel Pink"],
    luckyDays: ["Friday", "Wednesday"],
    compatibleNumbers: [2, 3, 6, 9]
  },
  7: {
    title: "The Mystic Scholar & Truth Seeker",
    rulingPlanet: "Ketu / Neptune 🔱",
    archetype: "Spiritual Philosopher, Analytical Researcher, Intuitive Sage",
    summary: "Number 7 represents deep inner wisdom, spiritual insight, and analytical brilliance. You peek beneath the surface to uncover cosmic truths and universal principles.",
    strengths: ["Profound intuition", "Analytical mastery", "Spiritual depth", "Perceptive observer"],
    challenges: ["Social withdrawal", "Over-analysis", "Skepticism"],
    careerPath: "Numerologist, Research Scientist, Spiritual Mentor, Data Strategist, Philosopher",
    relationshipInsight: "Requires a partner who respects intellectual privacy and values deep soul conversations.",
    luckyColors: ["Deep Indigo", "Violet", "Sea Green"],
    luckyDays: ["Monday", "Thursday"],
    compatibleNumbers: [1, 4, 7, 9]
  },
  8: {
    title: "The Sovereign Power & Abundance Catalyst",
    rulingPlanet: "Saturn ♄",
    archetype: "Financial Titan, Authority Figure, Karma Master",
    summary: "Number 8 represents executive authority, financial mastery, and material-spiritual synthesis. You possess the ambition and resilience to build massive legacies.",
    strengths: ["Executive presence", "Financial foresight", "Resilience under pressure", "Strategic vision"],
    challenges: ["Workaholism", "Struggle with control", "High expectations"],
    careerPath: "Venture Capitalist, Real Estate Developer, Industrialist, Enterprise CEO, Wealth Advisor",
    relationshipInsight: "Admires ambitious partners who possess their own drive and emotional maturity.",
    luckyColors: ["Royal Black", "Deep Gold", "Navy Blue"],
    luckyDays: ["Saturday", "Wednesday"],
    compatibleNumbers: [2, 4, 6, 8]
  },
  9: {
    title: "The Universal Humanitarian & Master Guide",
    rulingPlanet: "Mars ♂",
    archetype: "Global Visionary, Compassionate Leader, Wise Healer",
    summary: "Number 9 carries the culmination of all cosmic energies—wisdom, compassion, and global legacy. You are driven to inspire humanity and bring healing transformation.",
    strengths: ["Universal empathy", "Broad perspective", "Creative genius", "Magnetic authority"],
    challenges: ["Emotional detachment", "Difficulty letting go of past", "Idealistic frustration"],
    careerPath: "Philanthropist, Global Thought Leader, Educator, Spiritual Guide, Creative Director",
    relationshipInsight: "Seeks a partner with a big heart who shares a sense of purpose beyond self.",
    luckyColors: ["Crimson Red", "Coral", "Warm Gold"],
    luckyDays: ["Tuesday", "Sunday"],
    compatibleNumbers: [3, 6, 7, 9]
  },
  11: {
    title: "Master Number 11: The Luminous Illuminator",
    rulingPlanet: "Sun & Moon Alignment 🌟",
    archetype: "Spiritual Channeler, Visionary Prophet, High Intuitive",
    summary: "Master Number 11 is the vibration of spiritual awakening and divine inspiration. You carry heightened intuition, illuminating the path for others through divine insight.",
    strengths: ["Prophetic intuition", "Charismatic presence", "Spiritual vision", "Inspirational light"],
    challenges: ["Nervous tension", "High sensitivity", "Overwhelmed by energy"],
    careerPath: "Master Numerologist, Spiritual Teacher, Inspirational Author, Visionary Architect",
    relationshipInsight: "Needs an empathetic anchor who honors their high vibrational sensitivity.",
    luckyColors: ["Luminous White", "Gold Spark", "Electric Silver"],
    luckyDays: ["Sunday", "Monday"],
    compatibleNumbers: [2, 7, 11, 22]
  },
  22: {
    title: "Master Number 22: The Master Builder of Legacies",
    rulingPlanet: "Universal Rahu & Saturn 🏛️",
    archetype: "World Architect, Visionary Strategist, Monumental Creator",
    summary: "Master Number 22 turns grand spiritual visions into concrete global reality. It is the most powerful constructive energy in numerology, capable of manifesting global change.",
    strengths: ["Unmatched manifestor", "Global vision", "Practical genius", "Limitless potential"],
    challenges: ["Immense pressure", "Fear of failure", "Overwhelming ambition"],
    careerPath: "Global Institution Founder, Urban Master Planner, Philanthropic CEO, Pioneer",
    relationshipInsight: "Requires a partner who shares grand dreams and provides grounding emotional peace.",
    luckyColors: ["Deep Gold", "Matte Bronze", "Emerald"],
    luckyDays: ["Saturday", "Sunday"],
    compatibleNumbers: [4, 8, 11, 22]
  },
  33: {
    title: "Master Number 33: The Master Teacher & World Healer",
    rulingPlanet: "Cosmic Jupiter & Venus 🕊️",
    archetype: "Universal Compassion, Divine Educator, Spiritual Master",
    summary: "Master Number 33 represents pure selfless devotion, spiritual education, and universal healing. You uplift humanity through wisdom, love, and storytelling.",
    strengths: ["Cosmic compassion", "Master educator", "Harmonious aura", "Divine wisdom"],
    challenges: ["Carrying world burdens", "Emotional exhaustion"],
    careerPath: "World Educator, Spiritual Mentor, Global Philanthropist, Storyteller",
    relationshipInsight: "Seeks a partner committed to spiritual growth and unconditional love.",
    luckyColors: ["Royal Gold", "Celestial Blue", "Ivory"],
    luckyDays: ["Thursday", "Friday"],
    compatibleNumbers: [3, 6, 9, 33]
  }
};
