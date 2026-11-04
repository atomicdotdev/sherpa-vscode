export type PushArgsOptions = { remote?: string; fromView?: string; toView?: string };
export type PullArgsOptions = { remote?: string; fromView?: string; toView?: string };

function optionalArg(args: string[], flag: string, value: string | undefined): void {
  const trimmed = `${value ?? ''}`.trim();
  if (trimmed) args.push(flag, trimmed);
}

export function buildPushArgs(options: PushArgsOptions): string[] {
  const remote = `${options.remote ?? ''}`.trim();
  const args = ['push'];
  if (remote) args.push(remote);
  optionalArg(args, '--from-view', options.fromView);
  optionalArg(args, '--to-view', options.toView);
  return args;
}

export function buildPullArgs(options: PullArgsOptions): string[] {
  const remote = `${options.remote ?? ''}`.trim();
  const args = ['pull'];
  if (remote) args.push(remote);
  optionalArg(args, '--from-view', options.fromView);
  optionalArg(args, '--to-view', options.toView);
  return args;
}

export function buildInsertViewArgs(source: string, target: string): string[] {
  const from = source.trim();
  const to = target.trim();
  if (!from || !to) throw new Error('source and target view names are required');
  return ['insert', '--confirm', 'view', from, '--to-view', to];
}
