import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

export default function Test() {
  const t = zodResolver(z.object({}));
  return <div>{t.toString()}</div>;
}
