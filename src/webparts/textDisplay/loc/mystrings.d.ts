declare interface ITextDisplayWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  PageTitleFieldLabel: string;
  PageTeaserFieldLabel: string;
  PageTextAlignmentLabel: string;
}

declare module 'TextDisplayWebPartStrings' {
  const strings: ITextDisplayWebPartStrings;
  export = strings;
}
