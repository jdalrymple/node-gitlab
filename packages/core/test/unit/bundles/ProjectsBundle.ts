import 'jest-extended';
import { ProjectsBundle } from '../../../src';
import * as Services from '../../../src/resources';

test('All the correct service keys are included in the projects bundle', () => {
  const bundle: ProjectsBundle = new ProjectsBundle({ requesterFn: jest.fn(), token: 'test' });
  const resources = [
    'Branches',
    'Commits',
    'CommitDiscussions',
    'DeployKeys',
    'Deployments',
    'Environments',
    'Issues',
    'IssueAwardEmojis',
    'IssueNotes',
    'IssueDiscussions',
    'Jobs',
    'Labels',
    'MergeRequests',
    'MergeRequestApprovals',
    'MergeRequestAwardEmojis',
    'MergeRequestDiscussions',
    'MergeRequestNotes',
    'Pipelines',
    'PipelineSchedules',
    'PipelineScheduleVariables',
    'Projects',
    'ProjectAccessRequests',
    'ProjectBadges',
    'ProjectCustomAttributes',
    'ProjectImportExport',
    'ProjectIssueBoards',
    'ProjectHooks',
    'ProjectMembers',
    'ProjectMilestones',
    'ProjectSnippets',
    'ProjectSnippetNotes',
    'ProjectSnippetDiscussions',
    'ProjectSnippetAwardEmojis',
    'ProtectedBranches',
    'ProjectVariables',
    'Repositories',
    'RepositoryFiles',
    'Runners',
    'Services',
    'Tags',
    'Triggers',
  ];

  expect(Object.keys(bundle)).toIncludeAllMembers(resources);
});

test('All the correct service instances are included in the projects bundle', () => {
  const bundle = new ProjectsBundle({ requesterFn: jest.fn(), token: 'test' });

  (Object.keys(bundle) as (keyof typeof bundle)[]).forEach((key) => {
    expect(bundle[key]).toBeInstanceOf(Services[key]);
  });
});
