// plopfile.ts
import { value } from 'effect/Redacted'
import type { NodePlopAPI } from 'plop'

export default function (plop: NodePlopAPI) {
  plop.setGenerator('plant', {
    description: 'Manage collection entries for the plants.',
    prompts: [
      {
        type: 'input',
        name: 'latin',
        message: 'What is the latin name of the plant?',
      },
      {
        type: 'checkbox',
        name: 'floweringSeason',
        choices: [
          {
            name: 'January',
            value: 'january',
          },
          {
            name: 'February',
            value: 'february',
          },
          {
            name: 'March',
            value: 'march',
          },
          {
            name: 'April',
            value: 'april',
          },
          {
            name: 'May',
            value: 'may',
          },
          {
            name: 'June',
            value: 'june',
          },
          {
            name: 'July',
            value: 'july',
          },
          {
            name: 'August',
            value: 'august',
          },
          {
            name: 'September',
            value: 'september',
          },
          {
            name: 'October',
            value: 'october',
          },
          {
            name: 'November',
            value: 'november',
          },
          {
            name: 'December',
            value: 'december',
          },
        ],
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'content/plants/{{kebabCase latin}}.yaml',
        templateFile: 'plop-templates/add-plant.txt',
      },
    ],
  })
}
