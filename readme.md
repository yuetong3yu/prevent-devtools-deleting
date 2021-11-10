# Prevent using devtools to deleting your element

Recently I worked a company water-markup project. I found that the watermark that we generated could easily deleting by user's devtools. Somehow, we dont want that happened(I dont care actually, but company's resource would be stolen).

I think we could use **MutationObserver** to listening the target DOM(canvas or whatever you want), if deleting happened, we could recovered immediately.

## Demo Useage

```bash
yarn && yarn dev
```
