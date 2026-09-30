# Handoff Diff

**A local last-look for text handoffs before you paste a final draft into Gmail, Slack, Teams, WeChat, or a document.**

Paste an earlier and final version. Handoff Diff shows a normal text diff and separately calls out changed email addresses, URLs, currency amounts, percentages, and dates. It runs in the browser with no account, upload, extension permission, API key, or network request.

## Why

Generic diffs show every edit at the same visual priority. When a draft is about to go out, a changed amount, deadline, URL, or recipient is often more consequential than a sentence rewrite. Handoff Diff makes those concrete changes a deliberate review step.

## Use

Open the [live app](https://zcxikingstar-ship-it.github.io/handoff-diff/) or clone this repository and open `index.html`.

1. Paste the earlier draft and the final draft.
2. Select **Compare drafts**.
3. Review every marked email, URL, amount, percentage, and date change.
4. Send or publish only after you decide the changes are correct.

## Limits

- This is not an email, chat, or document integration and it never sends anything.
- It uses literal deterministic matching, not semantic interpretation.
- It cannot verify a recipient, link destination, calculation, approval, or date.

## Development

No runtime dependencies. Node.js 20+ is needed only for checks.

```sh
npm run check
npm test
```

## Security

Do not paste secrets into tools you do not trust. Handoff Diff itself makes no network calls; review its source before use in sensitive workflows. Report vulnerabilities through GitHub Security Advisories without exposing private content in public issues.

## License

[MIT](LICENSE).
