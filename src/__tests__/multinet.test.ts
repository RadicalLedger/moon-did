import { MoonDID } from '../index'

describe('other networks', () => {
  it('supports alpha - github #50', () => {
    const ethrDid = new MoonDID({
      identifier: '0x02b97c30de767f084ce3080168ee293053ba33b235d7116a3263d29f1450936b71',
      chainNameOrId: 'alpha',
    })
    expect(ethrDid.did).toEqual('did:moon:alpha:0x02b97c30de767f084ce3080168ee293053ba33b235d7116a3263d29f1450936b71')
    expect(ethrDid.address).toEqual('0xC662e6c5F91B9FcD22D7FcafC80Cf8b640aed247')
  })
})
