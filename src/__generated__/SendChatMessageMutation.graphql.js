/**
 * @flow
 * @relayHash 6f585e9a28fffcc799d60ed760192598
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SendChatMessageInput = {|
  chatId: string,
  clientMutationId?: ?string,
  content?: ?string,
  image?: ?string,
  questionName?: ?string,
  reference: string,
|};
export type SendChatMessageMutationVariables = {|
  input: SendChatMessageInput
|};
export type SendChatMessageMutationResponse = {|
  +sendChatMessage: {|
    +chat: ?{|
      +id: string,
      +archived: boolean,
      +resolved: boolean,
      +lastMessage: {|
        +id: string,
        +sentAt: any,
        +content: ?string,
        +contentPreview: ?string,
        +imageUrl: ?string,
      |},
    |}
  |}
|};
export type SendChatMessageMutation = {|
  variables: SendChatMessageMutationVariables,
  response: SendChatMessageMutationResponse,
|};
*/


/*
mutation SendChatMessageMutation(
  $input: SendChatMessageInput!
) {
  sendChatMessage(input: $input) {
    chat {
      id
      archived
      resolved
      lastMessage {
        id
        sentAt
        content
        contentPreview
        imageUrl
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "SendChatMessageInput!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "sendChatMessage",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "SendChatMessagePayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "chat",
        "storageKey": null,
        "args": null,
        "concreteType": "Chat",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "archived",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "resolved",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "lastMessage",
            "storageKey": null,
            "args": null,
            "concreteType": "Message",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "sentAt",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "content",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "contentPreview",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "imageUrl",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "SendChatMessageMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "SendChatMessageMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "SendChatMessageMutation",
    "id": null,
    "text": "mutation SendChatMessageMutation(\n  $input: SendChatMessageInput!\n) {\n  sendChatMessage(input: $input) {\n    chat {\n      id\n      archived\n      resolved\n      lastMessage {\n        id\n        sentAt\n        content\n        contentPreview\n        imageUrl\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6d0b7a9f5673ce8c0fcff0eaa947527e';

module.exports = node;
