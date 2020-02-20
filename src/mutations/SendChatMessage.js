// @flow

import {commitMutation, graphql} from 'relay-runtime';

export function SendChatMessage(config, environment) {
  commitMutation(environment, {
    mutation: graphql`
      mutation SendChatMessageMutation($input: SendChatMessageInput!) {
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
    `,
    ...config,
  });
}
