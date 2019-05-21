import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneDropdown
} from '@microsoft/sp-property-pane';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './TextDisplayWebPart.module.scss';
import * as strings from 'TextDisplayWebPartStrings';

export interface ITextDisplayWebPartProps {
  pageTitle: string;
  pageTeaser: string;
  pageTextAlignment: string;
}

export default class TextDisplayWebPart extends BaseClientSideWebPart<ITextDisplayWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${ styles.textDisplay }">
        <div class="${ styles.container }">
        <div class="${ styles.row}">
        <div class="${ styles.column + styles.columnProperties}" style="text-align:${this.properties.pageTextAlignment}">
          <span class="${ styles.pageTitle}">${escape(this.properties.pageTitle)}</span>
          <p class="${ styles.pageTeaser}">${escape(this.properties.pageTeaser)}</p>
        </div>
      </div>
    </div>
  </div>`;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('pageTitle', {
                  label: strings.PageTitleFieldLabel
                }),
                PropertyPaneTextField('pageTeaser', {
                  label: strings.PageTeaserFieldLabel,
                  multiline: true
                }),
                PropertyPaneDropdown('pageTextAlignment', {
                  label: strings.PageTextAlignmentLabel,
                  options: [
                    { key: 'left', text: 'Left' },
                    { key: 'center', text: 'Center' },
                    { key: 'right', text: 'Right' }
                  ]
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
