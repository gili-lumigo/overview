<p align="center">
 <img width="20%" height="20%" src="./logo.svg">
</p>
<h1 align="center">@ngneat/overview</h1>
<p align="center">
  <i>
    This library provides a complete set of directives and components to help you load content dynamically in Angular!
  </i>
</p>
<br />

[![npm](https://img.shields.io/npm/v/@ngneat/overview?style=flat-square)](https://www.npmjs.com/package/@ngneat/overview)
[![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg?style=flat-square)](https://github.com/ngneat/overview/blob/main/LICENSE)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/ngneat/overview/pulls)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
[![ngneat](https://img.shields.io/badge/@-ngneat-383636?style=flat-square&labelColor=8f68d4)](https://github.com/ngneat/)
[![spectator](https://img.shields.io/badge/tested%20with-spectator-2196F3.svg?style=flat-square)](https://github.com/ngneat/spectator)

## Installation

```bash
npm i @ngneat/overview
yarn add @ngneat/overview
```

## Usage

### `DynamicContent`

Use the `<dynamic-content>` component to render a component, a template or HTML dynamically.

```typescript
import { Content, DynamicContentModule } from '@ngneat/overview';

@Component({ 
  template: `
    <dynamic-content [content]="content"></dynamic-content>
  `
})
export class FooComponent {
  @Input() content: Content;
}

@NgModule({
  imports: [DynamicContentModule]
})
export class FooModule {}
```

`content` can be a [`TemplateRef`](https://angular.io/api/core/TemplateRef), a [`Component`](https://angular.io/api/core/Component), a `string` or `HTML`.

You can also pass a `context` and an [`injector`](https://angular.io/api/core/Injector) as `inputs` to the `dynamic-content` component.

### `Teleporting`

Teleporting means rendering a view at a different location from its declaration. There are two cases it might be helpful: 

- Avoid prop drilling to a nested component.
- Rendering a view at another place in the DOM while keeping its context where it’s defined.

You can read more about this approach in this [article](https://netbasal.com/beam-me-up-scotty-on-teleporting-templates-in-angular-a924f1a7798).


Use the `teleportOutlet` directive to define a new `outlet`. An `outlet` is an anchor where the view will be projected into.

```typescript
import { TeleportModule } from '@ngneat/overview';

@Component({ 
  template: `
    <div class="">
      <ng-container teleportOutlet="someId"></ng-container>
    </div>
  `
})
export class FooComponent {
}

@NgModule({
  imports: [TeleportModule]
})
export class FooModule {}
```

Use the `teleportTo` directive to `teleport` the view to a specific `outlet`:

```typescript
import { TeleportModule } from '@ngneat/overview';

@Component({ 
  template: `
    <section *teleportTo="someId">
      {{ value }}
    </section>
  `
})
export class BarComponent {
  value = '...'
}

@NgModule({
  imports: [TeleportModule]
})
export class BarModule {}
```


### `StringOrTemplate`
Let’s say we build a generic error component. What we want is to give our consumers the flexibly to create it by using one of three options:

- They can choose to use the default text value
- They can choose to use their own text which can be static or dynamic
- They can choose to pass their own template

```ts
import { TemplateOrStringModule } from '@ngneat/overview';

@Component({
  template: `
    <ng-template [templateOrString]="tplRef || error">
      <p>{{ error }}</p>
    </ng-template>
  `,
})
export class ErrorComponent {
  @Input() error: string | TemplateRef<any> = 'There was an error';
  @ContentChild(TemplateRef) tplRef: TemplateRef<any>;
}


@NgModule({
  imports: [TemplateOrStringModule]
})
export class ErrorModule {}
```

You can read more about this approach in this [article](https://netbasal.com/create-modular-components-with-angular-structural-directives-1a5198d9ab7d).


### ViewService
TBD

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://www.netbasal.com/"><img src="https://avatars.githubusercontent.com/u/6745730?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Netanel Basal</b></sub></a><br /><a href="https://github.com/@ngneat/overview/commits?author=NetanelBasal" title="Code">💻</a> <a href="#ideas-NetanelBasal" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/shhdharmen"><img src="https://avatars.githubusercontent.com/u/6831283?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Dharmen Shah</b></sub></a><br /><a href="#content-shhdharmen" title="Content">🖋</a> <a href="https://github.com/@ngneat/overview/commits?author=shhdharmen" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

<div>Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
