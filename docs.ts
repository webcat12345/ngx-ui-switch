import { from as observableFrom } from 'rxjs';
import { copy } from 'fs-extra';

function copyLogo() {
  return observableFrom(copy(`${process.cwd()}/logo.png`, `${process.cwd()}/docs/logo.png`));
}

copyLogo().subscribe(
  data => console.log('success'),
  err => console.log('err', err),
  () => console.log('complete')
);
