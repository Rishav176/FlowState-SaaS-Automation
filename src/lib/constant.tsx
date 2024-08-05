import Category from "@/components/icons/category"
import Home from "@/components/icons/home"
import Logs from "@/components/icons/clipboard"
import Payment from "@/components/icons/payment"
import Settings from "@/components/icons/settings"
import Templates from "@/components/icons/cloud_download"
import Workflows from "@/components/icons/workflows"
import { Connection } from "./types"


export const clients =  [
  "Effortlessly Connected",
  "Seamlessly Integrated",
  "Productivity Boosting",
  "Streamlined Collaboration",
  "Smart Automation",
  "Task Mastery",
  "Efficient Workflow",
  "Unified Workspace",
  "Instant Organization",
  "Ultimate Efficiency",
  "Simplified Management",
  "Dynamic Integration"]

export const products = [
  {
    title: 'Discord',
    link: 'https://discord.com/',
    thumbnail: '/DPara.png',
  },
  {
    title: 'Connections',
    link: '/connections',
    thumbnail: '/FCPara.png',
  },
  {
    title: 'Notion',
    link: 'https://www.notion.so',
    thumbnail: '/NPara.png',
  },

  {
    title: 'Editor Canvas',
    link: '/workflows/editor',
    thumbnail: '/temp-banner.png',
  },
  {
    title: 'Slack',
    link: 'https://app.slack.com',
    thumbnail: '/SPara.png',
  },
  {
    title: 'Workflows',
    link: '/workflow',
    thumbnail: '/FWPara.png',
  },

  {
    title: 'Billing',
    link: '/billing',
    thumbnail: '/FBPara.png',
  },
  {
    title: 'Aceternity UI',
    link: 'https://ui.aceternity.com',
    thumbnail: '/p2.png',
  },
  {
    title: 'Discord',
    link: 'https://discord.com/',
    thumbnail: '/DPara.png',
  },
  {
    title: 'Connections',
    link: '/connections',
    thumbnail: '/FCPara.png',
  },
  {
    title: 'Notion',
    link: 'https://www.notion.so',
    thumbnail: '/NPara.png',
  },

  {
    title: 'Editor Canvas',
    link: '/workflows/editor',
    thumbnail: '/temp-banner.png',
  },
  {
    title: 'Slack',
    link: 'https://app.slack.com',
    thumbnail: '/SPara.png',
  },
  {
    title: 'Workflows',
    link: '/workflow',
    thumbnail: '/FWPara.png',
  },

  {
    title: 'Billing',
    link: '/billing',
    thumbnail: '/FBPara.png',
  },
]

export const menuOptions = [
  { name: 'Dashboard', Component: Home, href: '/dashboard' },
  { name: 'Workflows', Component: Workflows, href: '/workflows' },
  { name: 'Settings', Component: Settings, href: '/settings' },
  { name: 'Connections', Component: Category, href: '/connections' },
  { name: 'Billing', Component: Payment, href: '/billing' },
  //{ name: 'Templates', Component: Templates, href: '/templates' },
  //{ name: 'Logs', Component: Logs, href: '/logs' },
]

export const EditorCanvasDefaultCardTypes = {
  
  Condition: {
    description: 'Boolean operator that creates different conditions lanes.',
    type: 'Action',
  },
  
  Slack: { description: 'Send a notification to slack', type: 'Action' },
  'Google Drive': {
    description:
      'Connect with Google drive to trigger actions or to create files and folders.',
    type: 'Trigger',
  },
  Notion: { description: 'Create entries directly in notion.', type: 'Action' },
  'Custom Webhook': {
    description:
      'Connect any app that has an API key and send data to your applicaiton.',
    type: 'Action',
  },
  Discord: {
    description: 'Post messages to your discord server',
    type: 'Action',
  },
 
  Trigger: {
    description: 'An event that starts the workflow.',
    type: 'Trigger',
  },
  Action: {
    description: 'An event that happens after the workflow begins',
    type: 'Action',
  },
  
}

export const CONNECTIONS: Connection[] = [
  {
    title: 'Google Drive',
    description: 'Connect your google drive to listen to folder changes',
    image: '/googleDrive.png',
    connectionKey: 'googleNode',
    alwaysTrue: true,
  },
  {
    title: 'Discord',
    description: 'Connect your discord to send notification and messages',
    image: '/discord.png',
    connectionKey: 'discordNode',
    accessTokenKey: 'webhookURL',
  },
  {
    title: 'Notion',
    description: 'Create entries in your notion dashboard and automate tasks.',
    image: '/notion.png',
    connectionKey: 'notionNode',
    accessTokenKey: 'accessToken',
  },
  {
    title: 'Slack',
    description:
      'Use slack to send notifications to team members through your own custom bot.',
    image: '/slack.png',
    connectionKey: 'slackNode',
    accessTokenKey: 'slackAccessToken',
    slackSpecial: true,
  },
]