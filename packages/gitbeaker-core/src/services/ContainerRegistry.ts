import { BaseService, RequestHelper, PaginatedRequestOptions, Sudo } from '../infrastructure';

export class ContainerRegistry extends BaseService {
  repositories(projectId: string | number, options?: PaginatedRequestOptions) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.get(this, `projects/${pId}/registry/repositories`, options);
  }

  tags(projectId: string | number, repositoryId: number, options?: PaginatedRequestOptions) {
    const [pId, rId] = [projectId, repositoryId].map(encodeURIComponent);

    return RequestHelper.get(this, `projects/${pId}/registry/repositories/${rId}/tags`, options);
  }

  removeRepository(projectId: string | number, repositoryId: number, options?: Sudo) {
    const [pId, rId] = [projectId, repositoryId].map(encodeURIComponent);

    return RequestHelper.del(this, `projects/${pId}/registry/repositories/${rId}`, options);
  }

  removeTag(projectId: string | number, repositoryId: number, tagName: string, options?: Sudo) {
    const [pId, rId, tId] = [projectId, repositoryId, tagName].map(encodeURIComponent);

    return RequestHelper.del(
      this,
      `projects/${pId}/registry/repositories/${rId}/tags/${tId}`,
      options,
    );
  }

  removeTags(
    projectId: string | number,
    repositoryId: number,
    // eslint-disable-next-line @typescript-eslint/camelcase
    name_regex: string,
    options?: Sudo & { keep_n: string; older_than: string },
  ) {
    const [pId, rId] = [projectId, repositoryId].map(encodeURIComponent);

    return RequestHelper.del(this, `projects/${pId}/registry/repositories/${rId}/tags`, {
      // eslint-disable-next-line @typescript-eslint/camelcase
      name_regex,
      ...options,
    });
  }

  showTag(projectId: string | number, repositoryId: number, tagName: string, options?: Sudo) {
    const [pId, rId, tId] = [projectId, repositoryId, tagName].map(encodeURIComponent);

    return RequestHelper.get(
      this,
      `projects/${pId}/registry/repositories/${rId}/tags/${tId}`,
      options,
    );
  }
}
