export interface AddProps {
  to: string;
  subject: string;
  variables: any;
  path: string;
}

export interface QueueProvider {
  add: (data: AddProps) => Promise<void>;
}
