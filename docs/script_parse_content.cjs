const fs = require('fs');
const content = fs.readFileSync('d:\\PROJECTS\\rixabhh.github.io\\content.md', 'utf-8');

const sanitized = content.replace(/—/g, '-');

const regex = /### Case Study \d+: .*?\r?\n\r?\n```markdown\r?\n([\s\S]*?)\r?\n```/g;
let match;
let count = 0;

const slugs = [
  'whatsapp-sales-bot',
  'identity-resolution',
  'llm-lead-scoring',
  'kiosk-flow',
  'cx-platform',
  'flick'
];

if (!fs.existsSync('d:\\PROJECTS\\rixabhh.github.io\\docs\\src\\content\\work')) {
  fs.mkdirSync('d:\\PROJECTS\\rixabhh.github.io\\docs\\src\\content\\work', { recursive: true });
}

while ((match = regex.exec(sanitized)) !== null) {
  const caseStudyMd = match[1];
  const lines = caseStudyMd.split(/\r?\n/);
  const title = lines[0].replace(/^# /, '').trim();
  
  let label = '';
  let summary = '';
  let role = '';
  let timeline = '';
  let status = '';
  
  let i = 1;
  while (i < lines.length && !lines[i].trim()) i++; 
  label = lines[i].trim();
  i++;
  
  while (i < lines.length && !lines[i].trim()) i++; 
  const summaryLines = [];
  while (i < lines.length && !lines[i].startsWith('Role:')) {
    if (lines[i].trim()) summaryLines.push(lines[i].trim());
    i++;
  }
  summary = summaryLines.join(' ');
  
  if (i < lines.length && lines[i].startsWith('Role:')) {
    role = lines[i].replace('Role:', '').trim();
    i++;
  }
  if (i < lines.length && lines[i].startsWith('Timeline:')) {
    timeline = lines[i].replace('Timeline:', '').trim();
    i++;
  }
  if (i < lines.length && lines[i].startsWith('Status:')) {
    status = lines[i].replace('Status:', '').trim();
    i++;
  }
  
  let bodyStartIndex = i;
  while (bodyStartIndex < lines.length && !lines[bodyStartIndex].startsWith('---')) {
    bodyStartIndex++;
  }
  bodyStartIndex++;
  
  const body = lines.slice(bodyStartIndex).join('\n').trim();
  
  const labelParts = label.split('·').map(p => p.trim());
  const company = labelParts.length > 1 ? labelParts[1] : '';
  const tags = JSON.stringify(labelParts);
  
  const frontmatter = `---
title: "${title}"
company: "${company}"
role: "${role}"
timeline: "${timeline}"
status: "${status}"
summary: "${summary}"
tags: ${tags}
---
`;

  const finalMd = frontmatter + '\n' + body;
  
  const slug = slugs[count];
  if (slug) {
    fs.writeFileSync(`d:\\PROJECTS\\rixabhh.github.io\\docs\\src\\content\\work\\${slug}.md`, finalMd);
    console.log('Created ' + slug + '.md');
  }
  count++;
}
console.log('Total generated:', count);
