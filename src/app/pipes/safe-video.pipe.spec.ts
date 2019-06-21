import { SafeVideoPipe } from './safe-video.pipe';

describe('SafeVideoPipe', () => {
  it('create an instance', () => {
    const videoUrl: any = '';
    const pipe = new SafeVideoPipe(videoUrl);
    expect(pipe).toBeTruthy();
  });
});
