import { Category, Poster } from './types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Phishing Awareness',
    slug: 'phishing',
    description: 'Learn to identify and avoid phishing attacks',
    icon: 'fish'
  },
  {
    id: '2',
    name: 'Password Security',
    slug: 'passwords',
    description: 'Best practices for creating and managing strong passwords',
    icon: 'lock'
  },
  {
    id: '3',
    name: 'Social Engineering',
    slug: 'social-engineering',
    description: 'Understand manipulation tactics used by attackers',
    icon: 'users'
  },
  {
    id: '4',
    name: 'Data Protection',
    slug: 'data-protection',
    description: 'Keep your sensitive data safe and secure',
    icon: 'shield-check'
  },
  {
    id: '5',
    name: 'Mobile Security',
    slug: 'mobile-security',
    description: 'Secure your mobile devices and apps',
    icon: 'smartphone'
  },
  {
    id: '6',
    name: 'Network Safety',
    slug: 'network-safety',
    description: 'Stay safe on public and private networks',
    icon: 'wifi'
  }
];

export const posters: Poster[] = [
  {
    id: '1',
    title: 'Spot the Phish: Email Red Flags',
    description: 'Learn to identify suspicious emails with this comprehensive guide covering sender verification, urgent language, suspicious links, and more. This poster breaks down the key indicators that can help you spot phishing attempts before they cause harm.',
    categoryId: '1',
    imageUrl: 'https://images.pexels.com/photos/5240544/pexels-photo-5240544.jpeg?auto=compress&cs=tinysrgb&w=1200',
    thumbnailUrl: 'https://images.pexels.com/photos/5240544/pexels-photo-5240544.jpeg?auto=compress&cs=tinysrgb&w=400',
    downloadCount: 234,
    tags: ['email', 'phishing', 'red flags', 'security awareness'],
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    title: 'Password Strength Guide',
    description: 'Create unbreakable passwords using length, complexity, and uniqueness. Includes tips for password managers and multi-factor authentication to keep your accounts secure.',
    categoryId: '2',
    imageUrl: 'https://images.pexels.com/photos/6963098/pexels-photo-6963098.jpeg?auto=compress&cs=tinysrgb&w=1200',
    thumbnailUrl: 'https://images.pexels.com/photos/6963098/pexels-photo-6963098.jpeg?auto=compress&cs=tinysrgb&w=400',
    downloadCount: 567,
    tags: ['passwords', 'authentication', 'security tips', 'best practices'],
    createdAt: '2024-01-20'
  },
  {
    id: '3',
    title: 'Social Engineering Tactics',
    description: 'Recognize common manipulation techniques including pretexting, baiting, quid pro quo, and tailgating used by attackers to gain unauthorized access to information.',
    categoryId: '3',
    imageUrl: 'https://images.pexels.com/photos/5935791/pexels-photo-5935791.jpeg?auto=compress&cs=tinysrgb&w=1200',
    thumbnailUrl: 'https://images.pexels.com/photos/5935791/pexels-photo-5935791.jpeg?auto=compress&cs=tinysrgb&w=400',
    downloadCount: 189,
    tags: ['social engineering', 'manipulation', 'awareness', 'human factor'],
    createdAt: '2024-02-01'
  },
  {
    id: '4',
    title: 'Data Encryption Essentials',
    description: 'Understand the importance of encryption for protecting sensitive data at rest and in transit. Learn about common encryption methods and when to use them.',
    categoryId: '4',
    imageUrl: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1200',
    thumbnailUrl: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400',
    downloadCount: 312,
    tags: ['encryption', 'data protection', 'privacy', 'security'],
    createdAt: '2024-02-10'
  },
  {
    id: '5',
    title: 'Mobile Device Security Checklist',
    description: 'Secure your smartphone and tablet with these essential steps: screen locks, app permissions, updates, and secure browsing practices to protect your data on the go.',
    categoryId: '5',
    imageUrl: 'https://images.pexels.com/photos/4195325/pexels-photo-4195325.jpeg?auto=compress&cs=tinysrgb&w=1200',
    thumbnailUrl: 'https://images.pexels.com/photos/4195325/pexels-photo-4195325.jpeg?auto=compress&cs=tinysrgb&w=400',
    downloadCount: 445,
    tags: ['mobile security', 'smartphones', 'apps', 'device protection'],
    createdAt: '2024-02-15'
  },
  {
    id: '6',
    title: 'Public WiFi Safety Tips',
    description: 'Stay safe on public networks by using VPNs, avoiding sensitive transactions, and verifying network authenticity before connecting your device.',
    categoryId: '6',
    imageUrl: 'https://images.pexels.com/photos/4474041/pexels-photo-4474041.jpeg?auto=compress&cs=tinysrgb&w=1200',
    thumbnailUrl: 'https://images.pexels.com/photos/4474041/pexels-photo-4474041.jpeg?auto=compress&cs=tinysrgb&w=400',
    downloadCount: 278,
    tags: ['wifi', 'public networks', 'vpn', 'network security'],
    createdAt: '2024-02-20'
  },
  {
    id: '7',
    title: 'Ransomware Prevention',
    description: 'Protect yourself from ransomware attacks with regular backups, software updates, and suspicious email awareness. Learn what to do if you become a victim.',
    categoryId: '4',
    imageUrl: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1200',
    thumbnailUrl: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=400',
    downloadCount: 401,
    tags: ['ransomware', 'malware', 'prevention', 'backups'],
    createdAt: '2024-02-25'
  },
  {
    id: '8',
    title: 'Two-Factor Authentication Benefits',
    description: 'Add an extra layer of security to your accounts with 2FA. Learn about different methods including SMS, authenticator apps, and hardware keys.',
    categoryId: '2',
    imageUrl: 'https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=1200',
    thumbnailUrl: 'https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=400',
    downloadCount: 523,
    tags: ['2fa', 'authentication', 'account security', 'multi-factor'],
    createdAt: '2024-03-01'
  },
  {
    id: '9',
    title: 'Safe Web Browsing Practices',
    description: 'Navigate the internet safely with these essential tips: verify HTTPS, check URLs, avoid suspicious downloads, and use privacy-focused browsers.',
    categoryId: '6',
    imageUrl: 'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=1200',
    thumbnailUrl: 'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=400',
    downloadCount: 356,
    tags: ['browsing', 'web security', 'privacy', 'safe internet'],
    createdAt: '2024-03-05'
  },
  {
    id: '10',
    title: 'Securing Your Home Network',
    description: 'Set up a secure home network with strong router passwords, WPA3 encryption, guest networks, and regular firmware updates to protect all connected devices.',
    categoryId: '6',
    imageUrl: 'https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=1200',
    thumbnailUrl: 'https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=400',
    downloadCount: 289,
    tags: ['home network', 'router', 'wifi security', 'home security'],
    createdAt: '2024-03-10'
  },
  {
    id: '11',
    title: 'USB Security Threats',
    description: 'Understand the risks of unknown USB devices including malware injection, data theft, and hardware damage. Learn safe handling practices.',
    categoryId: '4',
    imageUrl: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=1200',
    thumbnailUrl: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=400',
    downloadCount: 167,
    tags: ['usb', 'hardware', 'malware', 'physical security'],
    createdAt: '2024-03-15'
  },
  {
    id: '12',
    title: 'Cloud Storage Security',
    description: 'Protect your files in the cloud with encryption, strong passwords, two-factor authentication, and regular access audits. Choose reputable providers.',
    categoryId: '4',
    imageUrl: 'https://images.pexels.com/photos/4513880/pexels-photo-4513880.jpeg?auto=compress&cs=tinysrgb&w=1200',
    thumbnailUrl: 'https://images.pexels.com/photos/4513880/pexels-photo-4513880.jpeg?auto=compress&cs=tinysrgb&w=400',
    downloadCount: 412,
    tags: ['cloud', 'storage', 'backup', 'data protection'],
    createdAt: '2024-03-20'
  }
];
