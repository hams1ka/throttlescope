#!/usr/bin/env node
// polo-kit — ThrottleScope CLI
// Content creation tool for the 2018 VW Polo GT TSI Carbon Black
// Usage: polo-kit <command> [options]
// Install: npm install -g polo-kit

const args = process.argv.slice(2);
const cmd = args[0];

function parseFlags(arr) {
  const flags = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].startsWith('--')) flags[arr[i].slice(2)] = arr[i + 1] || true;
  }
  return flags;
}

const flags = parseFlags(args.slice(1));

// ─── DATA ────────────────────────────────────────────────────────────────────

const SPECS = {
  make: 'Volkswagen',
  model: 'Polo GT TSI',
  edition: 'Carbon Black',
  year: '2018',
  engine: '1.2L TSI 4-cylinder turbocharged',
  power: '103 bhp @ 5000 rpm',
  torque: '175 Nm @ 1500 rpm',
  gearbox: '7-speed DSG (dual-clutch)',
  drivetrain: 'FWD',
  sprint: '~9.7 seconds (0–100 km/h)',
  topSpeed: '~180 km/h',
  mileage: '17.21 kmpl (ARAI)',
  tankCapacity: '45 litres',
  range: '~774 km (full tank)',
  suspensionFront: 'McPherson strut with stabiliser bar',
  suspensionRear: 'Semi-independent trailing arm',
  specialFeatures: 'Piano black trim, carbon accents, GT sport seats, leather MF steering wheel'
};

const HOOKS = {
  aggressive: [
    'Low stance. Dark trim. Zero apologies. The Carbon Black is here.',
    '103 horses. 7-speed DSG. Small hatch. Massive character.',
    "You don't drive the Polo GT. You let it drive you.",
    "Carbon Black edition — because grey is for people who don't care.",
    "It's not the biggest car in the room. It's the most dangerous."
  ],
  poetic: [
    'Some cars are transportation. This one is a conversation.',
    "Black isn't just a colour here. It's a philosophy.",
    '175 Nm from 1500 rpm — torque that arrives before you ask.',
    'A German engineer sat down and said: make it perfect. They did.',
    'The roads didn\'t change. You just started seeing them differently.'
  ],
  technical: [
    '1.2L TSI. 103 bhp. 175 Nm. 7-speed DSG. On paper it\'s fast. In person it\'s alive.',
    'Dual-clutch gearbox, McPherson struts, turbocharged from idle — this is what GT means.',
    '0 to 100 in 9.7 seconds. DSG launch control engaged. Let\'s talk.',
    'The EA111 1.2 TSI — overbuilt for a hatchback. That\'s the point.',
    'Variable geometry turbo + DSG paddle shifts = 200ms gear changes. Every. Single. Time.'
  ],
  story: [
    'I bought it because of the spec sheet. I kept it because of the feeling.',
    'First time I floored it in Sport mode, I immediately knew I was in trouble.',
    'People see a hatchback. People who know, see the GT badge and step back.',
    'Three years, 40,000 km, zero regrets. This is the Polo GT story.',
    "My dad asked why I didn't get a sedan. I showed him the DSG. He understood."
  ],
  challenge: [
    'Name a better hot hatch under 10 lakh in India. I\'ll wait.',
    'You think this is just a Polo? Floor it once and come back to me.',
    'DSG or manual? Wrong question. The question is: how fast do you want it?',
    'Can your car do 0-100 in under 10 seconds? The Carbon Black can. Casually.',
    'Tell me you\'re a car person without telling me — I\'ll start: Carbon Black GT TSI.'
  ]
};

const CAPTIONS = {
  hype: {
    text: 'Carbon Black. 7-speed DSG. 175 Nm from idle.\nSome cars ask for attention — this one just earns it.\n\nNo filter needed when the trim does the talking.',
    tags: '#PoloGTTSI #CarbonBlack #VWIndia #HotHatch #DSG #CarReels #ThrottleScope #PoloGT #CarEnthusiast #Turbocharged'
  },
  chill: {
    text: 'Sunday morning. Empty roads. The GT in Sport mode.\nThis is what 17 kmpl of soul feels like.\n\nSome drives just fix things.',
    tags: '#SundayDrive #PoloGT #VWLife #CarbonBlack #WeekendVibes #CarCulture #ThrottleScope #SlowDown'
  },
  specs: {
    text: 'Specs don\'t lie:\n1.2L TSI · 103 bhp · 175 Nm · 7-speed DSG · 0-100 in 9.7s\n\nAll of that in a car smaller than your ego.\nCarbon Black Edition. 2018. Still relevant.',
    tags: '#PoloGTTSI #Specs #CarNerd #DSGLife #TurboHatch #VWIndia #CarbonBlack #ThrottleScope #CarFacts'
  },
  rant: {
    text: 'Hot take: The 2018 Polo GT TSI Carbon Black is still the best driver\'s car under ₹12 lakh in India.\n\nDSG. Turbo. German build. Carbon trim.\nEveryone moved to SUVs and left this gem behind.',
    tags: '#HotTake #PoloGT #CarOpinion #DSG #VWIndia #ThrottleScope #CarbonBlack #UnderratedCars'
  }
};

const HASHTAG_SETS = {
  core: ['#PoloGTTSI','#PoloGT','#CarbonBlack','#Polo2018','#PoloGTIndia','#DSGLife','#VWPolo','#PoloCarbon'],
  vw: ['#VWIndia','#VolkswagenIndia','#VWLife','#VWFamily','#VWCommunity','#VolkswagenPolo','#GermanEngineering','#VWLove'],
  reach: ['#HotHatch','#CarReels','#CarEnthusiast','#CarContent','#IndianCarCommunity','#CarLovers','#ThrottleScope','#CarGram','#InstaCar','#CarPage']
};

// ─── COMMANDS ─────────────────────────────────────────────────────────────────

const c = {
  red: (s) => `\x1b[31m${s}\x1b[0m`,
  green: (s) => `\x1b[32m${s}\x1b[0m`,
  yellow: (s) => `\x1b[33m${s}\x1b[0m`,
  cyan: (s) => `\x1b[36m${s}\x1b[0m`,
  bold: (s) => `\x1b[1m${s}\x1b[0m`,
  dim: (s) => `\x1b[2m${s}\x1b[0m`
};

function printHeader() {
  console.log(c.bold('\n  THROTTLESCOPE — Polo GT TSI Carbon Black'));
  console.log(c.dim('  @throttlescope · content creation CLI\n'));
}

function cmdSpecs() {
  if (flags.json) {
    console.log(JSON.stringify(SPECS, null, 2));
    return;
  }
  printHeader();
  console.log(c.yellow('  SPECIFICATIONS — 2018 VW Polo GT TSI Carbon Black\n'));
  Object.entries(SPECS).forEach(([k, v]) => {
    const key = k.padEnd(18);
    console.log(`  ${c.dim(key)} ${c.bold(v)}`);
  });
  console.log();
}

function cmdHooks() {
  const vibe = flags.vibe || 'aggressive';
  const hooks = HOOKS[vibe] || HOOKS.aggressive;
  printHeader();
  console.log(c.yellow(`  REEL HOOKS — vibe: ${vibe}\n`));
  hooks.forEach((h, i) => {
    console.log(`  ${c.red(`[${i + 1}]`)} ${h}\n`);
  });
}

function cmdCaption() {
  const mood = flags.mood || 'hype';
  const cap = CAPTIONS[mood] || CAPTIONS.hype;
  printHeader();
  console.log(c.yellow(`  CAPTION — mood: ${mood}\n`));
  console.log(`  ${cap.text.split('\n').join('\n  ')}\n`);
  console.log(c.cyan(`  ${cap.tags}\n`));
}

function cmdHashtags() {
  const set = flags.set || 'core';
  const tags = HASHTAG_SETS[set] || [...HASHTAG_SETS.core, ...HASHTAG_SETS.vw, ...HASHTAG_SETS.reach];
  printHeader();
  console.log(c.yellow(`  HASHTAGS — set: ${set}\n`));
  console.log(`  ${tags.join(' ')}\n`);
  if (flags.copy) {
    try {
      const { execSync } = require('child_process');
      const text = tags.join(' ');
      if (process.platform === 'darwin') execSync(`echo "${text}" | pbcopy`);
      else if (process.platform === 'linux') execSync(`echo "${text}" | xclip -selection clipboard`);
      console.log(c.green('  Copied to clipboard!\n'));
    } catch (_) {
      console.log(c.dim('  (--copy not supported on this system)\n'));
    }
  }
}

function cmdHelp() {
  printHeader();
  console.log(c.yellow('  COMMANDS\n'));
  const cmds = [
    ['specs', '', 'Print all car specs'],
    ['specs', '--json', 'Output specs as JSON'],
    ['hooks', '--vibe <vibe>', 'Generate 5 reel hooks'],
    ['caption', '--mood <mood>', 'Generate a caption + hashtags'],
    ['hashtags', '--set <set>', 'Get a hashtag set'],
    ['hashtags', '--set all --copy', 'Copy all hashtags to clipboard'],
  ];
  cmds.forEach(([cmd, opt, desc]) => {
    console.log(`  ${c.bold('polo-kit ' + cmd).padEnd(35)} ${c.dim(opt.padEnd(30))} ${desc}`);
  });
  console.log();
  console.log(c.yellow('  VIBE OPTIONS\n'));
  console.log(`  ${Object.keys(HOOKS).join(' · ')}\n`);
  console.log(c.yellow('  MOOD OPTIONS\n'));
  console.log(`  ${Object.keys(CAPTIONS).join(' · ')}\n`);
  console.log(c.yellow('  HASHTAG SETS\n'));
  console.log(`  core · vw · reach · all\n`);
  console.log(c.dim('  ThrottleScope · github.com/hams1ka/throttlescope\n'));
}

// ─── ROUTER ──────────────────────────────────────────────────────────────────

switch (cmd) {
  case 'specs':     cmdSpecs();     break;
  case 'hooks':     cmdHooks();     break;
  case 'caption':   cmdCaption();   break;
  case 'hashtags':  cmdHashtags();  break;
  case 'help':
  case '--help':
  case '-h':
  default:          cmdHelp();      break;
}
