import React from "react";
import { UserContext, ChannelContext } from "../../App";

export default function ComponentF() {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return (
            <ChannelContext.Consumer>
              {(channel) => {
                return (
                  <div>
                    Name is {user} and the {channel} hello this is auto update
                  </div>   
                );
              }}
            </ChannelContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}
