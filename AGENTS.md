<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Rules

- App-wide notices (the unofficial-prep disclaimer) render in the root component above `<Outlet />`, not inside a page route, so they appear on every page including 404 and error screens.
- Colors come only from the semantic tokens defined in `src/styles.css`; add a token there instead of hardcoding a color in a component.
