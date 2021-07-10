import React, { useState } from 'react'

import { connectController as wrapGlobalGameData } from '../../gameItems'
import { Button, WindowModal } from '../../gameItems/components'

const ExampleGameActionsWindow = ({ actions, setBackground, getRandomBackground }) => {
  return (
    <WindowModal
      initTop={320}
      initLeft={400}
      initHeight={450}
      initWidth={312}
      backgroundPath='./assets/trimmed/window_trimmed.png'
      dragAreaHeightPercent={20}
      onRequestClose={() => console.log('onRequestClose')}
      isOpen
      contentContainerStyle={{ marginTop: '20%', paddingLeft: 20, paddingRight: 20 }}
    >
      <div style={{ color: 'white' }}>
        <p style={{ fontSize: 11, textAlign: 'center' }}>Available Game Actions</p>
        <Button block onClick={() => actions.dialog.continueDialog()}>
          Advance Dialog
        </Button>
        <Button block onClick={() => actions.wallet.showWallet()}>
          Show Wallet
        </Button>
        <Button block onClick={() => actions.wallet.hideWallet()}>
          Hide Wallet
        </Button>
        <Button block onClick={() => actions.wallet.toggleWalletVisibility()}>
          Toggle Wallet
        </Button>
        <Button block onClick={() => actions.terminal.showTerminal()}>
          Show Terminal
        </Button>
        <Button block onClick={() => actions.terminal.hideTerminal()}>
          Hide Terminal
        </Button>
        <Button block onClick={() => actions.terminal.toggleTerminalVisibility()}>
          Toggle Terminal
        </Button>
        <Button block onClick={() => setBackground(getRandomBackground())}>
          Change Background
        </Button>
      </div>
    </WindowModal>
  )
}

export default wrapGlobalGameData(ExampleGameActionsWindow)
