import { Divider } from '@/components/divider'
import { Heading } from '@/components/heading'
import { Text } from '@/components/text'
import { getTransactions } from '@/lib/transactions'
import { formatZAR } from '@/lib/currency'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Order Successful',
  description: 'Your order has been successfully placed.',
}

export default async function Page() {
  const transactions = getTransactions()
  const latest = transactions[0]

  return (
    <>
      <main className="container">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-3xl">
          <div className="">
            <div className="flex w-fit items-center justify-center rounded-full border border-zinc-900 px-6 py-2.5 text-sm font-medium">
              <span className="text-xs uppercase">Thanks for ordering</span>
            </div>
            <Heading bigger className="mt-4">
              Payment {` `}
              <span data-slot="italic">successful!</span>
            </Heading>

            <Text className="mt-2.5 text-sm text-zinc-500">
              We appreciate your order, we’re currently processing it. So hang tight and we’ll send you confirmation
              very soon!
            </Text>

            {latest ? (
              <>
                <dl className="mt-16 text-sm">
                  <dt className="text-zinc-500 uppercase">Order number</dt>
                  <dd className="mt-2 font-medium text-zinc-950"># {latest.id}</dd>
                </dl>

                <ul
                  role="list"
                  className="mt-6 divide-y divide-zinc-200 border-t border-zinc-200 text-sm font-medium text-zinc-500"
                >
                  {latest.items.map((item) => (
                    <li key={`${item.title}-${item.color}-${item.size}`} className="flex space-x-6 py-6">
                      <div className="flex flex-auto flex-col space-y-1">
                        <h3 className="text-zinc-900 uppercase">{item.title}</h3>
                        <div className="flex items-center space-x-2 text-zinc-500">
                          {item.color ? <Text className="text-xs text-zinc-500">{item.color}</Text> : null}
                          {item.color && item.size ? <Text className="text-xs text-zinc-300">/</Text> : null}
                          {item.size ? <Text className="text-xs text-zinc-500">{item.size}</Text> : null}
                        </div>
                        <Text className="mt-auto text-xs text-zinc-500">Qty {item.quantity}</Text>
                      </div>
                      <p className="flex-none font-medium text-zinc-900">{formatZAR(item.price * item.quantity)}</p>
                    </li>
                  ))}
                </ul>

                <dl className="space-y-6 border-t border-zinc-200 pt-6 text-sm font-medium text-zinc-500">
                  <div className="flex justify-between">
                    <dt className="uppercase">Subtotal</dt>
                    <dd className="text-zinc-900">{formatZAR(latest.subtotal)}</dd>
                  </div>

                  <div className="flex justify-between">
                    <dt className="uppercase">Shipping</dt>
                    <dd className="text-zinc-900">{formatZAR(latest.shipping)}</dd>
                  </div>

                  <div className="flex items-center justify-between border-t border-zinc-200 pt-6 text-zinc-900">
                    <dt className="text-base uppercase">Total</dt>
                    <dd className="text-base">{formatZAR(latest.total)}</dd>
                  </div>
                </dl>
              </>
            ) : null}
          </div>
        </div>

        <div className="mx-auto max-w-2xl border-t border-zinc-200 py-6 text-right">
          <Link href="/shop" className="text-sm font-medium text-zinc-950 uppercase">
            Continue Shopping
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>

        <Divider />
      </main>
    </>
  )
}
