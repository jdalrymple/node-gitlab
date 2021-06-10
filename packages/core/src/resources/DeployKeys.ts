import { BaseResource } from '@gitbeaker/requester-utils';
import {
  RequestHelper,
  Sudo,
  BaseRequestOptions,
  PaginatedRequestOptions,
} from '../infrastructure';

export interface DeployKeySchema extends Record<string, unknown> {
  id: number;
  title: string;
  key: string;
  can_push?: boolean;
  created_at: string;
}

export class DeployKeys<C extends boolean = false> extends BaseResource<C> {
  add(projectId: string | number, options?: Sudo) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.post<DeployKeySchema>()(this, `projects/${pId}/deploy_keys`, options);
  }

  all({ projectId, ...options }: { projectId?: string | number } & PaginatedRequestOptions = {}) {
    let url: string;

    if (projectId) {
      url = `projects/${encodeURIComponent(projectId)}/deploy_keys`;
    } else {
      url = 'deploy_keys';
    }

    return RequestHelper.get<Omit<DeployKeySchema, 'can_push'>[]>()(this, url, options);
  }

  edit(projectId: string | number, keyId: number, options?: BaseRequestOptions) {
    const [pId, kId] = [projectId, keyId].map(encodeURIComponent);

    return RequestHelper.put<DeployKeySchema>()(
      this,
      `projects/${pId}/deploy_keys/${kId}`,
      options,
    );
  }

  enable(projectId: string | number, keyId: number, options?: Sudo) {
    const [pId, kId] = [projectId, keyId].map(encodeURIComponent);

    return RequestHelper.post<Omit<DeployKeySchema, 'can_push'>>()(
      this,
      `projects/${pId}/deploy_keys/${kId}/enable`,
      options,
    );
  }

  remove(projectId: string | number, keyId: number, options?: Sudo) {
    const [pId, kId] = [projectId, keyId].map(encodeURIComponent);

    return RequestHelper.del()(this, `projects/${pId}/deploy_keys/${kId}`, options);
  }

  show(projectId: string | number, keyId: number, options?: Sudo) {
    const [pId, kId] = [projectId, keyId].map(encodeURIComponent);

    return RequestHelper.get<DeployKeySchema>()(
      this,
      `projects/${pId}/deploy_keys/${kId}`,
      options,
    );
  }
}
