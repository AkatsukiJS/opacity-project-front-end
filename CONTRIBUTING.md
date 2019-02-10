# Contributing

## Workflow
> Creating a new component

#### 1. Go to the `develop` branch

`git checkout develop`

#### 2. Create a new branch for the component

`git checkout -b "feature-component-name"`

> Ex: git checkout -b "feature-button"

#### 3. Create the directory and files for the component

> Attention: the component names  must be in CamelCase

Example for **ComponentName**:
```d
src/
├── App.jsx
├── components
│   ├── atoms
│   │   └── ComponentName
│   │       ├── ComponentName.jsx
│   │       └── ComponentName.stories.js
│   └── index.js
├── index.html
├── index.js
└── theme.js

```

Export the component in `src/components/index.js`
```js
export { default as ComponentName } from './atoms/ComponentName/ComponentName.jsx'
```



#### 5. Develop the component and yours stories

>  For example see the [Button](https://github.com/AkatsukiJS/opacity-project-front-end/tree/master/src/components/atoms/Button)

For some doubts about Flow, EmotionJS or Storybook stories:
- [CheatSheet Flow](https://devhints.io/flow)
- [Flow site](https://flow.org/en/docs/types/)
- [Emotion JS](https://emotion.sh/docs/introduction)
- [Storybook Knobs](https://github.com/storybooks/storybook/tree/next/addons/knobs)
- [Storybook Actions](https://github.com/storybooks/storybook/tree/next/addons/actions)


#### 6. Test in Storybook

`yarn storybook`


#### 7. Commiting

All commits message should be in conventional-commits style:

The project uses [commitlint](https://github.com/conventional-changelog/commitlint#what-is-commitlint)


> **type(scope?)**: message
>
> _scope_ is optional

Types:
- `build`
- `ci`
- `chore`
- `docs`
- `feat`
- `fix`
- `perf`
- `refactor`
- `revert`
- `style`
- `test`

#### 8. Push it

Push the commits and open a `pull request`

#### Warnings

> If you are utilizing the _VSCode_ see [Flow support in VSCode](https://flow.org/en/docs/editors/vscode/)

> Before each commit the `flow check` will run and may take a while, be patient :grimacing: