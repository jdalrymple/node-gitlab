import * as Gitbeaker from '@gitbeaker/core';
import { modifyServices } from '@gitbeaker/requester-utils';
import { requesterFn } from './GotRequester';

const { getAPIMap, ...resources } = Gitbeaker;
const APIServices = modifyServices(resources, { requesterFn });

export const {
  // Groups
  Groups,
  GroupAccessRequests,
  GroupBadges,
  GroupCustomAttributes,
  GroupIssueBoards,
  GroupMembers,
  GroupMilestones,
  GroupRunners,
  GroupVariables,
  GroupLabels,
  Epics,
  EpicIssues,
  EpicNotes,
  EpicDiscussions,

  // Users
  Users,
  UserCustomAttributes,
  UserEmails,
  UserImpersonationTokens,
  UserSSHKeys,
  UserGPGKeys,

  // Projects
  Branches,
  Commits,
  CommitDiscussions,
  ContainerRegistry,
  Deployments,
  DeployKeys,
  Environments,
  FreezePeriods,
  Issues,
  IssuesStatistics,
  IssueNotes,
  IssueNoteAwardEmojis,
  IssueDiscussions,
  IssueAwardEmojis,
  Jobs,
  Labels,
  MergeRequests,
  MergeRequestApprovals,
  MergeRequestAwardEmojis,
  MergeRequestDiscussions,
  MergeRequestNotes,
  Packages,
  PackageRegistry,
  Pipelines,
  PipelineSchedules,
  PipelineScheduleVariables,
  Projects,
  ProjectAccessRequests,
  ProjectBadges,
  ProjectCustomAttributes,
  ProjectImportExport,
  ProjectIssueBoards,
  ProjectHooks,
  ProjectMembers,
  ProjectMilestones,
  ProjectSnippets,
  ProjectSnippetNotes,
  ProjectSnippetDiscussions,
  ProjectSnippetAwardEmojis,
  ProtectedBranches,
  ProtectedTags,
  ProjectVariables,
  PushRules,
  Releases,
  ReleaseLinks,
  Repositories,
  RepositoryFiles,
  Runners,
  Services,
  Tags,
  Todos,
  Triggers,
  VulnerabilityFindings,

  // Genral
  ApplicationSettings,
  BroadcastMessages,
  Events,
  FeatureFlags,
  GeoNodes,
  GitignoreTemplates,
  GitLabCIYMLTemplates,
  Keys,
  License,
  LicenseTemplates,
  Lint,
  Namespaces,
  NotificationSettings,
  Markdown,
  PagesDomains,
  Search,
  SidekiqMetrics,
  Snippets,
  SystemHooks,
  Version,
  Wikis,

  // Bundles
  GroupsBundle,
  UsersBundle,
  ProjectsBundle,
  Gitlab,
} = APIServices;
